---
layout: page
title: test
subtitle: page for testing stuff out
---

<!--
{% for pub in site.data.publications %}
  <p>
    <strong>{{ pub.title }}</strong> —
    {% for author in pub.authors %}{{ author }}{% unless forloop.last %}, {% endunless %}{% endfor %}
    ({{ pub.year }})
    {% if pub.link %} — <a href="{{ pub.link }}">Read more</a>{% endif %}
  </p>
{% endfor %}

<h4>Stage 1 Registered Report</h4>
<p style="padding-left: 25px; text-indent: -25px"><i>Schuwerk, T.*</i>, <i>Kampis, D.*</i>, Baillargeon, R., Biro, S., Bohn, M., Byers-Heinlein, K., Dörrenberg, S., Fisher, C., Franchin, L., Fulcher, T., Garbisch, I., Geraci, A., Grosse Wiesmann, C., Hamlin, K., Haun, D. B. M., Hepach, R., Hunnius, S., Hyde, D. C., Karman, P., … Rakoczy, H. (accepted pending data collection). <b>Action anticipation based on an agent's epistemic state in toddlers and adults</b>. <i>Child Development</i>. PsyArXiv. <a href="https://doi.org/10.31234/osf.io/x4jbm" target="_blank">https://doi.org/10.31234/osf.io/x4jbm</a> <i>(*co-first authors)</i></p>
-->

{% assign pubs = site.data.publications | where: "project", "MB1" %}
{% for pub in pubs %} <!--- loop over main projects -->
  <div class="container">
    <div class="row">
      <div class="col-sm-2" align="center">
        <a href="https://{{pub.website }}"><img src="{{ pub.logoPath }}" alt="{{ pub.project}} logo" width="70" style="margin-top:4px;"></a>        
      </div>
      <div class="col-sm-10">
        <h4><a href="https://{{pub.website }}">{{ pub.project }}</a>: {{ pub.title }}</h4>
        ({{ pub.year }})
        {% for author in pub.authors %}{{ author }}{% unless forloop.last %}, {% endunless %}{% endfor %}
          {% if pub.journallink %} — <a href="{{ pub.link }}">Read more</a>{% endif %}
      </div>
    </div>
  </div>
{% endfor %}

{% assign pubs = site.data.publications | where: "project", "MB-Demographics" %}
{% for pub in pubs %} <!--- loop over main projects -->
  <div class="container">
    <div class="row">
      <div class="col-sm-2" align="center">
        <a href="https://{{pub.website }}"><img src="{{ pub.logoPath }}" alt="{{ pub.project}} logo" width="70" style="margin-top:4px;"></a>        
      </div>
      <div class="col-sm-10">
        {{ pub.authorsCondensed }} ({{ pub.year }}). {{pub.title}}. <i>{{pub.journal}}, {{pub.issue}}</i>({{ pub.issue }}), {{ pub.pages }}. <a href="{{ pub.journalLink }}" target="_blank">{{ pub.journalLink}}</a>
        <details>
          <summary><code>View full author list</code></summary>
          {% for author in pub.authors %}
            {% if author.orcid %}
              <a href="{{ author.orcid }}">{{ author.name }}</a> 
            {% else %}
              {{ author.name }}
            {% endif %}{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        </details>
      </div>
    </div>
  </div>  
{% endfor %}
