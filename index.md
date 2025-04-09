---
layout: default
title: Trang Chủ Codex Nebula
seo:
  title: Codex Nebula - Kho Tàng Tri Thức Số Hiện Đại
  description: Khám phá và chia sẻ tài liệu học tập đa dạng từ Toán, Lý, Hóa đến Lập trình với giao diện sci-fi độc đáo.
---

<section class="hero animate-on-load">
  <div class="hero__content">
    <h1>Chào mừng đến với <span class="highlight">Codex Nebula</span>!</h1>
    <p class="subtitle">Nơi tri thức được sắp xếp, chia sẻ và khám phá trong một vũ trụ số đầy cảm hứng.</p>
    <a href="#document-list" class="btn btn--primary btn--large">Khám phá Tài liệu</a>
    </div>
     {# Có thể thêm hình ảnh hoặc animation nền ở đây #}
</section>

<section id="document-list" class="document-list animate-on-load" data-delay="150">
  <h2><i class="fas fa-meteor"></i> Tài liệu Nổi Bật</h2> {# Sử dụng Font Awesome nếu tích hợp #}
  <div class="grid-container grid-container--3-col">
    {% comment %}
      Phần này sẽ lặp qua tài liệu. Bạn cần tạo các file markdown
      trong _posts/ hoặc _documents/ và thêm front matter tương ứng.
      Ví dụ front matter cho file tài liệu:
      ---
      layout: post
      title: "Giới thiệu về React Hooks"
      date: 2024-05-21 10:00:00 +0700
      author: "AI Vui Tính"
      categories: [Lập Trình, Frontend]
      tags: [react, javascript, hooks, frontend]
      excerpt: "Tìm hiểu về các React Hooks cơ bản như useState, useEffect và cách chúng thay đổi cách viết component trong React."
      download_url: "/path/to/your/document.pdf" # Optional
      featured: true # Optional
      ---
      Nội dung tài liệu viết ở đây...
    {% endcomment %}

    {% assign display_docs = site.documents | default: site.posts | sort: 'date' | reverse | limit: 6 %}

    {% if display_docs.size > 0 %}
      {% for doc in display_docs %}
        {% include document-card.html document=doc %}
      {% endfor %}
    {% else %}
      <p class="placeholder-message">Hiện chưa có tài liệu nào được đăng tải. Hãy quay lại sau nhé!</p>
    {% endif %}
  </div>
  {% if site.documents.size > 6 or site.posts.size > 6 %}
    <div class="section-footer">
        <a href="/archive/" class="btn btn--secondary">Xem tất cả tài liệu</a> {# Tạo trang lưu trữ nếu muốn #}
    </div>
  {% endif %}
</section>

<section class="categories animate-on-load" data-delay="300">
   <h2><i class="fas fa-project-diagram"></i> Khám phá theo Chủ đề</h2>
   <div class="tag-list">
      {% assign all_tags = "" %}
      {% for doc in site.documents %}
          {% assign t = doc.tags | join:'|' | append:'|' %}
          {% assign all_tags = all_tags | append:t %}
      {% endfor %}
       {% for doc in site.posts %}
          {% assign t = doc.tags | join:'|' | append:'|' %}
          {% assign all_tags = all_tags | append:t %}
      {% endfor %}

      {% assign tags = all_tags | split:'|' | uniq | sort | where_exp: "item", "item != ''" %}

      {% if tags.size > 0 %}
          {% for tag in tags limit:15 %} {# Giới hạn số tag hiển thị ban đầu #}
              <a href="/tags/{{ tag | slugify }}/" class="tag">{{ tag }}</a> {# Tạo trang tag nếu muốn #}
          {% endfor %}
          {% if tags.size > 15 %}
           <a href="/tags/" class="tag tag--more">Xem thêm...</a> {# Link đến trang liệt kê tất cả tag #}
          {% endif %}
      {% else %}
           <p class="placeholder-message">Chưa có chủ đề nào.</p>
      {% endif %}
   </div>
</section>

{# Thêm các section khác nếu muốn: Giới thiệu tính năng, Lời kêu gọi hành động... #}
