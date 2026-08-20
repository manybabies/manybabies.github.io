---
layout: page
title: Projects
subtitle: Pulled live from Airtable
---


## Empirical projects

{% assign main_projects = site.data.airtable | where: "type", "Main" | where: "category", "Empirical" %} <!--- empirical projects -->
{% for main in main_projects %} <!--- loop over main projects -->
  <div class="container">
      <div class="row">
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{main.website }}"><img src="{{ main.logoPath }}" alt="{{ main.project}} logo" width="90" height="90"></a>
        </div>
        <div class="col-sm-10">
          <h3><a href=" https://{{main.website }}">{{ main.project }}:</a> {{ main.description }}</h3>
          <b>Status:</b> <i>{{ main.status }}</i><br>
        </div>
      </div> 
  </div>
  {% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainProject", main.project %}
  <div class="container">
    {% for spinoff in spinoffs %}
      <div class="row">
        <div class="col-sm-2">  
        </div>
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{spinoff.website }}"><img src="{{ spinoff.logoPath }}" alt="{{ spinoff.project}} logo" width="70" height="70" style="margin-top:40px;"></a>
        </div>
        <div class="col-sm-8">
          <hr>
          <h4 style="margin-top:0.5em;"><a href=" https://{{spinoff.website }}">{{ spinoff.project }}:</a> {{ spinoff.description }}</h4>
          <b>Status:</b> <i>{{ spinoff.status }}</i><br>
        </div>
      </div> 
    {% endfor %}
  </div>
  {% assign secondary = site.data.airtable | where: "type", "Secondary analysis" | where: "mainProject", main.project %}
  <div class="container">
    {% for item in secondary %}
      <div class="row">
        <div class="col-sm-2">  
        </div>
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{item.website }}"><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="70" height="70" style="margin-top:10px"></a>
        </div>
        <div class="col-sm-8">
          <hr>
          <h4 style="margin-top:0.5em;"><a href=" https://{{item.website }}">{{ item.project }}:</a> {{ item.description }}</h4>
          <b>Status:</b> <i>{{ item.status }}</i><br>
        </div>
      </div> 
    {% endfor %}
  </div>
  <hr>
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
-->