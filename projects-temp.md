---
layout: page
title: Projects
subtitle: Pulled live from Airtable
---

<!--
{% for item in site.data.airtable %}
  <div class="panel panel-default">
    <br>
    {% if item.logopath %}<img src="{{ item.logopath }}" alt="{{ item.project }} logo" width="75" height="75">{% endif %}
    <h4>{{ item.project }}: {{ item.description }}</h4>
    <p><strong>Leads:</strong> {% for lead in item.leads %}{{ lead }}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
    {% if item.website %}<a href="https://{{ item.website }}">Visit site →</a>{% endif %}
    <br>
    <br>
  </div>
{% endfor %}

{% assign mb1n = site.data.airtable | where: "project", "MB1N" | first %}
{% if mb1n %}
  <a href="https://{{ mb1n.website }}">Visit MB1N →</a>
{% endif %}
-->

{% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainproject", "MB1" %}
{% for item in spinoffs %}
  <h4>[{{ item.project }}]({{ item.website }}): {{ item.description }}</h4>
{% endfor %}

***

{% assign mb1spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainproject", "MB1" %}
<div class="container">
  <div class="row">
    <div class="col-sm-2 col-xs-6" align="center">
      <br>
      <a href="{{site.baseurl}}/MB1/"><img src="/assets/img/mb1-logo.png" alt="MB1 logo" width="75" height="75"></a>
    </div>
    <div class="col-sm-10">
      <h4><a href="{{site.baseurl}}/MB1/">MB1: Infant-Directed Speech Preference</a></h4>
      <b>Status:</b> <i>{{ site.data.global.status.mb1 }}</i><br>
      <hr>
    </div>
  </div>
</div>