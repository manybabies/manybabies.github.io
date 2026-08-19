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


{% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainProject", "MB1" %}
{% for item in spinoffs %}
  <h4><a href="https://{{ item.website }}">{{ item.project }}</a>: {{ item.description }}</h4>
{% endfor %}
-->

***
TEST8

{% assign main_projects = site.data.airtable | where: "type", "Main" %}
{% for item in main_projects %}
  <div class="container">
      <div class="row">
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{item.website }}"><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="100" height="100"></a>
        </div>
        <div class="col-sm-10">
          <h3><a href=" https://{{item.website }}">{{ item.project }}:</a> {{ item.description }}</h3>
          <b>Status:</b> <i>{{ item.status }}</i><br>
          <hr>
        </div>
      </div> 
  </div>
{% endfor %}

***
<!--
{% assign mb1main = site.data.airtable | where: "project", "MB1" | first %}
{% if mb1main %}
  <div class="container">
      <div class="row">
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{mb1main.website }}"><img src="{{ mb1main.logoPath }}" alt="{{ mb1main.project}} logo" width="100" height="100"></a>
        </div>
        <div class="col-sm-10">
          <h3><a href=" https://{{mb1main.website }}">{{ mb1main.project }}:</a> {{ mb1main.description }}</h3>
          <b>Status:</b> <i>{{ mb1main.status }}</i><br>
          <hr>
        </div>
      </div> 
  </div>
{% endif %}
-->

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
        <h4 style="margin-top:0.5em;"><a href=" https://{{item.website }}">{{ item.project }}:</a> {{ item.description }}</h4>
        <b>Status:</b> <i>{{ item.status }}</i><br>
        <hr>
      </div>
    </div> 
  {% endfor %}
</div>


{% assign mb1sas = site.data.airtable | where: "type", "Secondary analysis" | where: "mainProject", "MB1" %}
<div class="container">
  {% for item in mb1sas %}
    <div class="row">
      <div class="col-sm-2">  
      </div>
      <div class="col-sm-2 col-xs-6" align="center">
        <a href="https://{{item.website }}"><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="75" height="75"></a>
      </div>
      <div class="col-sm-8">
        <h4 style="margin-top:0.5em;"><a href=" https://{{item.website }}">{{ item.project }}:</a> {{ item.description }}</h4>
        <b>Status:</b> <i>{{ item.status }}</i><br>
        <hr>
      </div>
    </div> 
  {% endfor %}
</div>