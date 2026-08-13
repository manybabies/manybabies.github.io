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

{% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainProject", "MB1" %}
{% for item in spinoffs %}
  <h4><a href="https://{{ item.website }}">{{ item.project }}</a>: {{ item.description }}</h4>
{% endfor %}

***
TEST4

{% assign mb1projects = site.data.airtable | where: "mainProject", "MB1" %}
{% assign mb1main = mb1projects | where: "type" "Main" %}
{% assign mb1spinoffs = mb1projects | where: "type" "Spin-off" %}

{% if mb1 %}
  <div class="container">
      <div class="row">
        <div class="col-sm-2 col-xs-6" align="center" style="margin-top: 10px;">
          <a href="https://{{mb1.website }}"><img src="{{ mb1.logoPath }}" alt="{{ mb1.project}} logo" width="100" height="100"></a>
        </div>
        <div class="col-sm-10">
          <h4><a href=" https://{{mb1.website }}">{{ mb1.project }}:</a> {{ mb1.description }}</h4>
          <b>Status:</b> <i>{{ mb1.status }}</i><br>
          <hr>
        </div>
      </div> 
  </div>
{% endif %}


{% assign mb1spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainProject", "MB1" %}
<div class="container">
  {% for item in mb1spinoffs %}
    <div class="row">
      <div class="col-sm-2">  
      </div>
      <div class="col-sm-2 col-xs-6" align="center">
        <a href="https://{{item.website }}"><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="75" height="75"></a>
      </div>
      <div class="col-sm-8">
        <h4><a href=" https://{{item.website }}">{{ item.project }}:</a> {{ item.description }}</h4>
        <b>Status:</b> <i>{{ item.status }}</i><br>
        <hr>
      </div>
    </div> 
  {% endfor %}
</div>