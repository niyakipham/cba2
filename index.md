---
layout: home
title: Knowledge Nebula
subtitle: Vũ trụ tri thức dành cho cộng đồng học tập
hero_image: /assets/images/hero-bg.jpg
cta:
  primary:
    text: Khám phá tài liệu
    link: "#docs"
  secondary:
    text: Đóng góp ngay
    link: "/contribute"
features:
  - title: Tài liệu đa dạng
    icon: 📚
    description: Hơn 1000+ tài liệu chất lượng từ cơ bản đến nâng cao
  - title: Cập nhật thường xuyên
    icon: 🔄
    description: Nguồn tài nguyên được cập nhật liên tục bởi cộng đồng
  - title: Dễ dàng tìm kiếm
    icon: 🔍
    description: Hệ thống phân loại và tìm kiếm thông minh
recent_docs_count: 6
---

<section class="features-section">
  <div class="container">
    <div class="features-grid">
      {% for feature in page.features %}
      <div class="feature-card">
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-number" data-count="1000">0</div>
        <div class="stat-label">Tài liệu</div>
      </div>
      <div class="stat-card">
        <div class="stat-number" data-count="50">0</div>
        <div class="stat-label">Môn học</div>
      </div>
      <div class="stat-card">
        <div class="stat-number" data-count="200">0</div>
        <div class="stat-label">Người đóng góp</div>
      </div>
      <div class="stat-card">
        <div class="stat-number" data-count="5000">0</div>
        <div class="stat-label">Lượt truy cập</div>
      </div>
    </div>
  </div>
</section>

<section class="testimonials-section">
  <div class="container">
    <h2 class="section-title">Nhận xét từ cộng đồng</h2>
    <div class="testimonials-slider">
      <div class="testimonial-card">
        <div class="testimonial-content">
          "Knowledge Nebula đã thay đổi hoàn toàn cách tôi tiếp cận việc học. Tài liệu chất lượng và hệ thống tổ chức khoa học."
        </div>
        <div class="testimonial-author">
          <img src="/assets/images/avatars/avatar1.jpg" alt="Nguyễn Văn A">
          <div>
            <strong>Nguyễn Văn A</strong>
            <span>Sinh viên Đại học Bách Khoa</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-content">
          "Nguồn tài nguyên tuyệt vời cho cả giảng viên và sinh viên. Tôi thường xuyên giới thiệu nền tảng này cho đồng nghiệp."
        </div>
        <div class="testimonial-author">
          <img src="/assets/images/avatars/avatar2.jpg" alt="Trần Thị B">
          <div>
            <strong>Trần Thị B</strong>
            <span>Giảng viên Đại học Khoa học Tự nhiên</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Sẵn sàng khám phá vũ trụ tri thức?</h2>
    <p>Tham gia cộng đồng hơn 200 người đóng góp và 5000 thành viên</p>
    <div class="cta-buttons">
      <a href="/docs" class="btn btn-primary">Xem tài liệu</a>
      <a href="/join" class="btn btn-secondary">Tham gia ngay</a>
    </div>
  </div>
</section>

<style>
.features-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, rgba(10, 25, 47, 0.9) 0%, rgba(23, 42, 69, 0.9) 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 3rem;
  margin-top: 5rem;
}

.feature-card {
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 1rem;
  padding: 3rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: rgba(100, 255, 218, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 4rem;
  margin-bottom: 2rem;
}

.stats-section {
  padding: 8rem 0;
  background: url('/assets/images/stats-bg.jpg') no-repeat center/cover;
  position: relative;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.8);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.stat-card {
  text-align: center;
  background: rgba(100, 255, 218, 0.1);
  padding: 3rem;
  border-radius: 1rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(100, 255, 218, 0.2);
}

.stat-number {
  font-size: 5rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 1rem;
}

.stat-label {
  font-size: 1.8rem;
  color: #ccd6f6;
}

.testimonials-section {
  padding: 8rem 0;
  background: #0a192f;
}

.section-title {
  text-align: center;
  margin-bottom: 6rem;
  font-size: 3.5rem;
  background: linear-gradient(90deg, #64ffda, #5e78ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.testimonials-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 3rem;
}

.testimonial-card {
  background: #172a45;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.testimonial-content {
  font-size: 1.8rem;
  font-style: italic;
  margin-bottom: 2rem;
  color: #ccd6f6;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.testimonial-author img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #64ffda;
}

.testimonial-author strong {
  display: block;
  font-size: 1.8rem;
  color: #ccd6f6;
}

.testimonial-author span {
  font-size: 1.4rem;
  color: #8892b0;
}

.cta-section {
  padding: 10rem 0;
  text-align: center;
  background: linear-gradient(135deg, #172a45 0%, #0a192f 100%);
}

.cta-section h2 {
  font-size: 4rem;
  margin-bottom: 2rem;
}

.cta-section p {
  font-size: 2rem;
  color: #8892b0;
  margin-bottom: 4rem;
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.btn-primary {
  background: #64ffda;
  color: #0a192f;
  padding: 1.5rem 3rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(100, 255, 218, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  padding: 1.5rem 3rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(100, 255, 218, 0.2);
}
</style>

<script>
// Animate stats counting
document.addEventListener('DOMContentLoaded', function() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateCount = (element) => {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      element.textContent = Math.floor(current);
    }, 16);
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => {
    observer.observe(stat);
  });
});
</script>
