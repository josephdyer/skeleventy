---
layout: page
meta_title: Categories
meta_description: Browse all categories
hide_from_sitemap: true
robots: noindex,follow
title: Categories
permalink: /categories/
---

<ul class="leading-loose">
 {% for category in collections.categories %}
  <li><a href="{{ category | url }}">{{ category | capitalize }}</a></li>
 {% endfor %}
</ul>
