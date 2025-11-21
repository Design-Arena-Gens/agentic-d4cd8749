"use client";

import { FormEvent } from "react";

const highlights = [
  {
    title: "ضمان الجودة",
    description: "مصنوع من مواد ممتازة تدوم طويلاً وتتحمل الاستخدام اليومي."
  },
  {
    title: "خدمة ما بعد البيع",
    description: "دعم متواصل واستبدال مجاني في حال وجود أي عيب مصنعي."
  },
  {
    title: "دفع عند الاستلام",
    description: "يمكنك الدفع نقداً عند استلام المنتج دون أي مخاطر."
  }
];

const testimonials = [
  {
    name: "أمينة من الجزائر العاصمة",
    quote:
      "وصلني المنتج خلال يومين فقط والجودة كانت أفضل مما توقعت. شكراً على العرض الرائع!"
  },
  {
    name: "مراد من وهران",
    quote:
      "التوصيل كان مجاني وسريع، أنا راضٍ جداً عن الخدمة والتجربة كلها كانت ممتازة."
  }
];

const faqs = [
  {
    question: "كم يستغرق التوصيل؟",
    answer: "عادة ما يتم التوصيل خلال 2 إلى 5 أيام عمل حسب ولايتك."
  },
  {
    question: "هل يوجد ضمان؟",
    answer:
      "نعم، المنتج مغطى بضمان لمدة 12 شهراً ضد عيوب التصنيع مع استبدال مجاني."
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نوفر الدفع عند الاستلام أو التحويل البنكي المسبق."
  }
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div className="badge">عرض محدود</div>
        <h1>احصل على منتجك الآن بسعر 3500 دج فقط</h1>
        <p>
          عرض خاص لفترة محدودة في السوق الجزائري. التوصيل مجاني إلى باب منزلك
          في كل الولايات.
        </p>
        <div className="price">
          <span className="amount">3500</span>
          <span className="currency">دينار جزائري</span>
        </div>
        <p className="delivery">التوصيل مجاني 100%</p>
        <a className="cta" href="#order">
          اطلب الآن
        </a>
        <div className="hero-image" aria-hidden="true" />
      </header>

      <section className="features">
        <h2>لماذا هذا المنتج هو الأفضل؟</h2>
        <div className="grid">
          {highlights.map((item) => (
            <div className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>آراء الزبائن</h2>
        <div className="grid">
          {testimonials.map((item) => (
            <blockquote className="testimonial-card" key={item.name}>
              <p>“{item.quote}”</p>
              <footer>{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="details">
        <h2>ماذا تحصل عند شرائك للمنتج؟</h2>
        <ul>
          <li>
            عبوة كاملة تحتوي على جميع الملحقات الضرورية لتجربة استخدام مثالية.
          </li>
          <li>دليل استعمال باللغة العربية لتسهيل الفهم والاستعمال اليومي.</li>
          <li>دعم فني محترف جاهز دائماً للرد على جميع استفساراتك.</li>
        </ul>
      </section>

      <section className="faq">
        <h2>أسئلة متكررة</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="order" id="order">
        <h2>اطلب الآن واستفد من العرض</h2>
        <form
          className="order-form"
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            alert("شكراً لطلبك! سنتواصل معك لتأكيد الطلب.");
          }}
        >
          <label>
            الاسم الكامل
            <input name="name" type="text" required placeholder="أدخل اسمك" />
          </label>
          <label>
            رقم الهاتف
            <input
              name="phone"
              type="tel"
              required
              placeholder="مثال: 0555 123 456"
            />
          </label>
          <label>
            الولاية
            <input name="wilaya" type="text" required placeholder="ولايتك" />
          </label>
          <label>
            العنوان التفصيلي
            <textarea
              name="address"
              required
              placeholder="الشارع، البلدية، أي تفاصيل إضافية"
            />
          </label>
          <button type="submit">تأكيد الطلب</button>
        </form>
        <p className="order-note">
          لا يوجد أي التزام، سيتم الاتصال بك لتأكيد الطلب قبل الشحن.
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} كل الحقوق محفوظة. عرض خاص للتوصيل داخل الجزائر.</p>
      </footer>
    </main>
  );
}
