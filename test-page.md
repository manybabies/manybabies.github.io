---
layout: page
title: test
subtitle: page for testing stuff out
---


{% for pub in site.data.publications %}
  <p>
    <strong>{{ pub.title }}</strong> —
    {% for author in pub.authors %}{{ author }}{% unless forloop.last %}, {% endunless %}{% endfor %}
    ({{ pub.year }})
    {% if pub.link %} — <a href="{{ pub.link }}">Read more</a>{% endif %}
  </p>
{% endfor %}