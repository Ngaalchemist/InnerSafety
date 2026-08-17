import React, { useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ShieldCheck,
  Lock,
  Clock,
  Check,
  Star,
  Zap,
  Scale,
  Video,
  FileText,
  Headphones,
  Users,
  ArrowRight,
  BadgeCheck,
  Smartphone,
  Mail,
  RefreshCw,
  QrCode,
  CheckCircle2,
  MessageCircle,
  Users2,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// ────────────────────────────────────────────────────────────────
// Static content
// ────────────────────────────────────────────────────────────────

const included = [
  { icon: Video, text: '7 buổi video thực hành hàng ngày' },
  { icon: FileText, text: 'Healing Workbook đầy đủ' },
  { icon: Headphones, text: 'Audio "21 Ngày Duy Trì Tần Số An Toàn" — thực hành sau khóa học' },
  { icon: Users, text: 'Cộng đồng học viên đồng hành suốt hành trình' },
  { icon: Clock, text: 'Truy cập trọn đời — học lại bất cứ khi nào cần' },
];

const bonuses = [
  { title: 'Emergency Reset 5 Phút', icon: Clock },
  { title: 'Sleep Healing Audio — "Tôi Đủ"', icon: Headphones },
  { title: 'Nặng vs Nhẹ — Công Cụ Ra Quyết Định', icon: Scale },
  { title: 'Pattern Interrupt — Công Cụ Ngắt Vòng Lặp Phản Ứng', icon: Zap },
];

const objections = [
  {
    q: 'Tôi sợ mua xong rồi không học, lãng phí tiền.',
    a: 'Bài học chia nhỏ 30–45 phút/ngày, có thể học trên điện thoại bất cứ đâu. Bạn có quyền truy cập trọn đời nên không có áp lực "phải học ngay" — học theo tốc độ của riêng bạn.',
  },
  {
    q: 'Tôi không chắc phương pháp này có hợp với mình không.',
    a: 'Vì vậy có cam kết hoàn tiền 100% trong 7 ngày. Bạn trải nghiệm trước, nếu thấy không phù hợp, chỉ cần gửi email và được hoàn tiền toàn bộ, không cần lý do.',
  },
  {
    q: 'Thanh toán online như vậy có an toàn không?',
    a: 'Toàn bộ giao dịch được xử lý qua cổng thanh toán mã hoá chuẩn bảo mật. Chúng tôi không lưu trữ thông tin thẻ của bạn trên hệ thống.',
  },
  {
    q: 'Tôi mới bắt đầu, chưa có nền tảng gì cả.',
    a: 'Khóa học không yêu cầu kiến thức nền. Inner Safety Method™ được thiết kế để bất kỳ ai cũng áp dụng được, kể cả khi bạn chưa từng thiền hay trị liệu trước đây.',
  },
  {
    q: 'Sau khi thanh toán tôi nhận được gì và ở đâu?',
    a: 'Ngay sau khi thanh toán thành công, bạn nhận email xác nhận kèm link truy cập khóa học trong vòng vài phút. Nếu không thấy email, hãy kiểm tra mục Spam hoặc liên hệ hỗ trợ.',
  },
];

const checkoutFaqs = [
  { q: 'Tôi nhận sản phẩm bằng cách nào sau khi thanh toán?', a: 'Hệ thống gửi email xác nhận tự động kèm hướng dẫn truy cập ngay sau khi thanh toán thành công.' },
  { q: 'Tôi có quyền truy cập trong bao lâu?', a: 'Trọn đời. Bạn có thể xem lại toàn bộ bài học bất cứ khi nào cần, không giới hạn thời gian.' },
  { q: 'Mua xong tôi bắt đầu từ đâu?', a: 'Email xác nhận có sẵn đường link vào khóa học và hướng dẫn buổi học đầu tiên — chỉ cần bấm vào là bắt đầu được ngay.' },
  { q: 'Tôi có thể học trên điện thoại không?', a: 'Có. Toàn bộ nền tảng học được tối ưu cho điện thoại, máy tính bảng và máy tính.' },
  { q: 'Nếu tôi không nhận được email thì sao?', a: 'Kiểm tra hộp thư Spam/Quảng cáo trước. Nếu vẫn không thấy, liên hệ hotro@innersafety.vn để được hỗ trợ trong ngày.' },
  { q: 'Chính sách hoàn tiền như thế nào?', a: 'Hoàn tiền 100% trong 7 ngày đầu tiên nếu bạn cảm thấy không phù hợp, không cần giải trình lý do.' },
  { q: 'Tôi có cần kỹ năng gì trước khi học không?', a: 'Không cần. Khóa học phù hợp với cả người mới bắt đầu.' },
  { q: 'Thanh toán có bảo mật không?', a: 'Có, giao dịch được xử lý qua chuyển khoản ngân hàng chuẩn. Hệ thống không lưu trữ thông tin tài khoản của bạn.' },
  { q: 'Tôi có được cập nhật nội dung mới sau này không?', a: 'Có. Mọi bài học hoặc tài liệu bổ sung trong tương lai đều miễn phí cho học viên đã đăng ký.' },
];

// ────────────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────────────

type Step = 'form' | 'qr' | 'success';

interface OrderData {
  orderId: string;
  qrUrl: string;
}

interface InviteLinks {
  zaloInviteUrl: string | null;
  skoolInviteUrl: string | null;
}

// ────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────

export function CheckoutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Form state
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  // Checkout flow
  const [step, setStep] = useState<Step>('form');
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [pollError, setPollError] = useState('');
  const [inviteLinks, setInviteLinks] = useState<InviteLinks>({ zaloInviteUrl: null, skoolInviteUrl: null });

  // ── SePay payment polling ─────────────────────────────────────
  const pollStatus = useCallback(async (orderId: string) => {
    try {
      const res = await fetch(`/api/checkout/status/${orderId}`);
      if (!res.ok) return;
      const data = await res.json() as {
        status: string;
        zaloInviteUrl?: string | null;
        skoolInviteUrl?: string | null;
      };
      if (data.status === 'paid') {
        setInviteLinks({
          zaloInviteUrl: data.zaloInviteUrl ?? null,
          skoolInviteUrl: data.skoolInviteUrl ?? null,
        });
        setStep('success');
      }
    } catch {
      // silent — poll will retry
    }
  }, []);

  useEffect(() => {
    if (step !== 'qr' || !orderData) return;
    setPollError('');
    const interval = setInterval(() => pollStatus(orderData.orderId), 4000);
    // Also poll immediately
    pollStatus(orderData.orderId);
    return () => clearInterval(interval);
  }, [step, orderData, pollStatus]);

  // ── Form validation ───────────────────────────────────────────
  const validate = () => {
    const newErrors = { name: '', phone: '', email: '' };
    let ok = true;
    if (!formData.name.trim()) { newErrors.name = 'Vui lòng nhập họ và tên'; ok = false; }
    if (!formData.phone.trim()) { newErrors.phone = 'Vui lòng nhập số điện thoại'; ok = false; }
    else if (!/^[0-9]{9,11}$/.test(formData.phone.replace(/[^0-9]/g, ''))) { newErrors.phone = 'Số điện thoại không hợp lệ'; ok = false; }
    if (!formData.email.trim()) { newErrors.email = 'Vui lòng nhập email để nhận link truy cập'; ok = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = 'Email không hợp lệ'; ok = false; }
    setErrors(newErrors);
    return ok;
  };

  // ── Form submit → create order → show QR ─────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setApiError('');

    try {
      const res = await fetch('/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({})) as { error?: string };
        throw new Error(body.error ?? 'Không thể tạo đơn hàng. Vui lòng thử lại.');
      }

      const data = await res.json() as { orderId: string; qrUrl: string };
      setOrderData({ orderId: data.orderId, qrUrl: data.qrUrl });
      setStep('qr');
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── QR step ───────────────────────────────────────────────────
  const qrStepContent = (
    <div className="space-y-5 text-center text-[#1b1918]">
      <div className="flex items-center justify-center gap-2 text-sm font-bold text-primary mb-1">
        <QrCode className="w-4 h-4" />
        Quét mã QR để thanh toán
      </div>

      {orderData && (
        <div className="flex justify-center">
          <div className="p-2 rounded-xl border-2 border-primary/30 bg-white shadow-md">
            <img
              src={orderData.qrUrl}
              alt="Mã QR thanh toán"
              className="w-52 h-52 object-contain rounded-lg"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  `https://api.qrserver.com/v1/create-qr-code/?size=208x208&data=${encodeURIComponent(orderData.orderId)}`;
              }}
            />
          </div>
        </div>
      )}

      <div className="text-left space-y-1.5 bg-muted/40 rounded-xl p-4 text-sm">
        <p className="font-semibold text-foreground/80 text-center mb-2">Thông tin chuyển khoản</p>
        <div className="flex justify-between">
          <span className="text-foreground/60">Số tiền</span>
          <span className="font-bold text-primary">444.000đ</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-foreground/60 shrink-0">Nội dung CK</span>
          <span className="font-mono font-bold text-right break-all">{orderData?.orderId}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-foreground/60 animate-pulse">
        <RefreshCw className="w-4 h-4 animate-spin" />
        Đang chờ xác nhận thanh toán…
      </div>

      {pollError && (
        <p className="text-xs text-destructive">{pollError}</p>
      )}

      <p className="text-[11px] text-muted-foreground">
        Sau khi chuyển khoản thành công, hệ thống sẽ tự xác nhận trong vòng vài giây.<br />
        Không cần chụp màn hình hay liên hệ thủ công.
      </p>

      <button
        onClick={() => { setStep('form'); setOrderData(null); }}
        className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
      >
        Quay lại chỉnh sửa thông tin
      </button>
    </div>
  );

  // ── Success step ──────────────────────────────────────────────
  const hasInvites = inviteLinks.zaloInviteUrl || inviteLinks.skoolInviteUrl;
  const successStepContent = (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h4 className="text-xl font-bold mb-2">Thanh toán thành công!</h4>
        <p className="text-sm leading-relaxed">
          Cảm ơn <strong>{formData.name}</strong>!<br />
          Kiểm tra email <strong>{formData.email}</strong> trong vài phút<br />
          để nhận link truy cập khóa học ngay lập tức.
        </p>

        {hasInvites && (
          <div className="mt-6 pt-6 border-t border-green-200 space-y-2.5">
            <p className="text-sm font-semibold text-green-900">Tham gia cộng đồng ngay để không bỏ lỡ:</p>
            {inviteLinks.zaloInviteUrl && (
              <a
                href={inviteLinks.zaloInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm text-white bg-[#0068FF] hover:brightness-110 transition-all"
                data-testid="link-join-zalo"
              >
                <MessageCircle className="w-4 h-4" /> Tham gia nhóm Zalo
              </a>
            )}
            {inviteLinks.skoolInviteUrl && (
              <a
                href={inviteLinks.skoolInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm text-white bg-[#1b1918] hover:brightness-125 transition-all"
                data-testid="link-join-skool"
              >
                <Users2 className="w-4 h-4" /> Tham gia cộng đồng Skool
              </a>
            )}
          </div>
        )}

        <p className="text-xs text-green-700/70 mt-4">
          Không thấy email? Kiểm tra hộp thư Spam hoặc liên hệ hotro@innersafety.vn
        </p>
      </div>
  );

  // ── Render ────────────────────────────────────────────────────
  return (
    <section id="final-cta" ref={sectionRef} className="py-16 sm:py-24 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-bold uppercase tracking-wide mb-5">
            <BadgeCheck className="w-4 h-4" /> Bạn đã sẵn sàng — hoàn tất đăng ký bên dưới
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-4">
            Xác Nhận Đơn Hàng Của Bạn
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            Điền thông tin bên dưới để nhận quyền truy cập ngay lập tức vào BEYOND FEAR - 7 Ngày Từ Sợ Hãi Đến Bình An.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* LEFT — order details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* ORDER SUMMARY */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-1">
                  BEYOND FEAR
                </h3>
                <p className="text-sm text-muted-foreground">7 Ngày từ Sợ Hãi Đến Bình An</p>
              </div>
              <div className="flex items-baseline gap-3 py-4 border-y border-border/30">
                <span className="text-3xl sm:text-4xl font-extrabold text-primary">444.000đ</span>
                <span className="text-sm text-muted-foreground">Một lần thanh toán · Truy cập trọn đời</span>
              </div>
              <div className="flex items-center gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary" fill="currentColor" />
                ))}
                <span className="text-sm text-foreground/70 ml-1">4.9/5 từ hơn 500+ khách hàng</span>
              </div>
            </div>

            {/* WHAT YOU GET */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30">
              <h4 className="text-lg font-serif font-bold text-primary mb-4">Bạn nhận được ngay hôm nay:</h4>
              <ul className="space-y-3">
                {included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground/80">{item.text}</span>
                  </li>
                ))}
              </ul>
              {/* BONUS STACK */}
              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-sm font-bold text-foreground/70 uppercase tracking-wide mb-3">+ 4 quà tặng đi kèm</p>
                <div className="space-y-2">
                  {bonuses.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm bg-background/40 rounded-lg px-3 py-2.5">
                      <b.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{b.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TRUST BADGES */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70 bg-card/40 border border-border/30 rounded-full px-3.5 py-2">
                <ShieldCheck className="w-4 h-4 text-primary" /> Hoàn tiền 100% trong 7 ngày
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70 bg-card/40 border border-border/30 rounded-full px-3.5 py-2">
                <Lock className="w-4 h-4 text-primary" /> Thanh toán bảo mật
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70 bg-card/40 border border-border/30 rounded-full px-3.5 py-2">
                <Zap className="w-4 h-4 text-primary" /> Truy cập tức thì
              </div>
            </div>

            {/* OBJECTION HANDLING */}
            <div className="rounded-2xl bg-card/30 border border-border/30 px-2">
              <p className="text-sm font-bold text-foreground/70 uppercase tracking-wide px-4 pt-4">Còn băn khoăn?</p>
              <Accordion type="single" collapsible className="w-full">
                {objections.map((o, idx) => (
                  <AccordionItem key={idx} value={`obj-${idx}`} className="border-border/20">
                    <AccordionTrigger className="text-sm sm:text-base text-left hover:no-underline px-2">{o.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/70 px-2">{o.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* FAQ */}
            <div className="rounded-2xl bg-card/30 border border-border/30 px-2">
              <p className="text-sm font-bold text-foreground/70 uppercase tracking-wide px-4 pt-4">Câu hỏi trước khi thanh toán</p>
              <Accordion type="single" collapsible className="w-full">
                {checkoutFaqs.map((f, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border-border/20">
                    <AccordionTrigger className="text-sm sm:text-base text-left hover:no-underline px-2">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/70 px-2">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>

          {/* RIGHT — sticky form / QR / success */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:sticky lg:top-6 h-fit"
          >
            <div className="rounded-2xl bg-white text-[#1b1918] p-6 sm:p-8 shadow-2xl border-2 border-primary/30">

              {/* STEP: FORM */}
              {step === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-checkout">
                  <div className="space-y-1.5">
                    <Label htmlFor="checkout-name">Họ và tên *</Label>
                    <Input
                      id="checkout-name"
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`h-12 bg-gray-50 border-gray-200 ${errors.name ? 'border-red-500' : ''}`}
                      data-testid="input-checkout-name"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="checkout-phone">Số điện thoại *</Label>
                    <Input
                      id="checkout-phone"
                      type="tel"
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`h-12 bg-gray-50 border-gray-200 ${errors.phone ? 'border-red-500' : ''}`}
                      data-testid="input-checkout-phone"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="checkout-email">Email *</Label>
                    <Input
                      id="checkout-email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`h-12 bg-gray-50 border-gray-200 ${errors.email ? 'border-red-500' : ''}`}
                      data-testid="input-checkout-email"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    <p className="text-[11px] text-gray-500 flex items-center gap-1">
                      <Mail className="w-3 h-3" /> Link truy cập khóa học sẽ được gửi tới email này
                    </p>
                  </div>

                  {apiError && (
                    <p className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{apiError}</p>
                  )}

                  <div className="pt-1">
                    <div className="flex items-center justify-between text-sm mb-3 text-gray-600">
                      <span>Tổng thanh toán</span>
                      <span className="text-xl font-bold text-[#1b1918]">444.000đ</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-base sm:text-lg text-white bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:shadow-2xl hover:shadow-amber-400/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                      data-testid="button-checkout-submit"
                    >
                      {isSubmitting ? (
                        <><RefreshCw className="w-5 h-5 animate-spin" /> Đang xử lý…</>
                      ) : (
                        <> BẮT ĐẦU BEYOND FEAR™ — 444.000đ <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-gray-500 mt-3 flex items-center justify-center gap-1.5">
                      <Lock className="w-3 h-3" /> Bước tiếp theo: quét mã QR chuyển khoản · Truy cập tức thì sau khi hoàn tất
                    </p>
                    <p className="text-center text-[11px] text-gray-400 mt-2">
                      Được phát triển bởi Nga Alchemist · Inner Safety Method™
                    </p>
                  </div>
                </form>
              )}

              {/* STEP: QR CODE */}
              {step === 'qr' && qrStepContent}

              {/* STEP: SUCCESS */}
              {step === 'success' && successStepContent}
            </div>

            {/* Trust micro-copy */}
            {step !== 'success' && (
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Hoàn tiền 7 ngày, không cần lý do
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-primary" /> Học được trên điện thoại
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" /> Không phí ẩn
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
