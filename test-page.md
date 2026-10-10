---
layout: page
title: test-page
subtitle: page for testing stuff out
---

<!--- empirical projects -->
<h3 style="margin-top:40px;">Empirical Projects</h3>

{% assign main_projects = site.data.airtable | where: "type", "Main" | where: "category", "Empirical" %}
{% for main in main_projects %} <!--- loop over main projects -->
  <div class="container">
    <div class="row">
      <div class="col-sm-3 col-xs-6" align="center">
        <a href="https://{{main.website }}"><img src="{{ main.logoPath }}" alt="{{ main.project}} logo" width="100" height="100" style="margin-top:4px; filter: drop-shadow(-4px 4px 2px #7F7F7F);"></a>
      </div>
      <div class="col-sm-9">
        <h4 style="margin-top:0em;"><a href=" https://{{main.website }}">{{ main.project }}: {{ main.description }}</a></h4>
        <i>{{ main.tagline }}</i><br>
        {% assign spinoffs = site.data.airtable | where_exp: "item", "item.type != 'Main'" | where: "mainProject", main.project %}
        {% if spinoffs.size > 0 %}
          <b>Spin-offs: </b> 
          {%- for spinoff in spinoffs -%}
            <a href="https://{{ spinoff.website }}">{{ spinoff.project }}</a>{% unless forloop.last %}, {% endunless %} 
          {%- endfor -%} <!-- spinoffs loop -->
        {% endif %}
      </div>
    </div>
  </div>
  <hr style="margin-top:20px; margin-bottom:10px;">
{% endfor %}


<h3 style="margin-top:40px;">Methodological Projects</h3>

{% assign main_projects = site.data.airtable | where: "type", "Main" | where: "category", "Methodological" %}
{% for main in main_projects %} <!--- loop over main projects -->
  <div class="container">
    <div class="row">
      <div class="col-sm-3 col-xs-6" align="center">
        <a href="https://{{main.website }}"><img src="{{ main.logoPath }}" alt="{{ main.project}} logo" width="100" height="100" style="margin-top:4px; filter: drop-shadow(-4px 4px 2px #7F7F7F);"></a>
      </div>
      <div class="col-sm-9">
        <h4 style="margin-top:0em;"><a href=" https://{{main.website }}">{{ main.project }}: {{ main.description }}</a></h4>
        <i>{{ main.tagline }}</i><br>
        {% assign spinoffs = site.data.airtable | where_exp: "item", "item.type != 'Main'" | where: "mainProject", main.project %}
        {% if spinoffs.size > 0 %}
          <b>Spin-offs: </b> 
          {%- for spinoff in spinoffs -%}
            <a href="https://{{ spinoff.website }}">{{ spinoff.project }}</a>{% unless forloop.last %}, {% endunless %} 
          {%- endfor -%} <!-- spinoffs loop -->
        {% endif %}
      </div>
    </div>
  </div>
  <hr style="margin-top:20px; margin-bottom:10px;">
{% endfor %}