---
layout: page
title: Projects
subtitle: Pulled live from Airtable
---

test 11

## Empirical projects

{% assign main_projects = site.data.airtable | where: "type", "Main" | where: "category", "Empirical" %} <!--- empirical projects -->
{% for main in main_projects %} <!--- loop over main projects -->
  <div class="container">
      <div class="row">
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{main.website }}"><img src="{{ main.logoPath }}" alt="{{ main.project}} logo" width="70"></a>
        </div>
        <div class="col-sm-10">
          <h3 style="margin-top:0.1em;"><a href=" https://{{main.website }}">{{ main.project }}:</a> {{ main.description }}</h3>
          <b>Status:</b> <i>{{ main.status }}</i><br>
        </div>
      </div> 
  </div>
  {% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainProject", main.project %}
  <div class="container">
    {% for spinoff in spinoffs %} <!--- loop over spinoff projects -->
      <div class="row">
        <div class="col-sm-1">  
        </div>
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{spinoff.website }}"><img src="{{ spinoff.logoPath }}" alt="{{ spinoff.project}} logo" width="40" align="right" style="margin-top:30px;"></a>
        </div>
        <div class="col-sm-9">
          <hr>
          <h4 style="margin-top:0.5em;"><a href=" https://{{spinoff.website }}">{{ spinoff.project }}:</a> {{ spinoff.description }}</h4>
          <b>Status:</b> <i>{{ spinoff.status }}</i><br>
        </div>
      </div> 
    {% endfor %}
  </div>
  {% assign secondary = site.data.airtable | where: "type", "Secondary analysis" | where: "mainProject", main.project %}
  <div class="container">
    {% for item in secondary %} <!--- loop over sec.analysis projects -->
      <div class="row">
        <div class="col-sm-1">  
        </div>
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{item.website }}"><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="40" align="right" style="margin-top:30px;"></a>
        </div>
        <div class="col-sm-9">
          <hr>
          <h4 style="margin-top:0.5em;"><a href=" https://{{item.website }}">{{ item.project }}:</a> {{ item.description }}</h4>
          <b>Status:</b> <i>{{ item.status }}</i><br>
        </div>
      </div> 
    {% endfor %}
  </div>
  <hr>
{% endfor %}


<h2 style="margin-top:2em;">Methodological projects</h2>

{% assign main_projects = site.data.airtable | where: "type", "Main" | where: "category", "Methodological" %} <!--- methodological projects -->
{% for main in main_projects %} <!--- loop over main projects -->
  <div class="container">
      <div class="row">
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{main.website }}"><img src="{{ main.logoPath }}" alt="{{ main.project}} logo" width="70"></a>
        </div>
        <div class="col-sm-10">
          <h3  style="margin-top:0.1em;"><a href=" https://{{main.website }}">{{ main.project }}:</a> {{ main.description }}</h3>
          <b>Status:</b> <i>{{ main.status }}</i><br>
        </div>
      </div> 
  </div>
  {% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainProject", main.project %}
  <div class="container">
    {% for spinoff in spinoffs %} <!--- loop over spinoff projects -->
      <div class="row">
        <div class="col-sm-1">  
        </div>
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{spinoff.website }}"><img src="{{ spinoff.logoPath }}" alt="{{ spinoff.project}} logo" width="40" align="right" style="margin-top:30px;"></a>
        </div>
        <div class="col-sm-9">
          <hr>
          <h4 style="margin-top:0.5em;"><a href=" https://{{spinoff.website }}">{{ spinoff.project }}:</a> {{ spinoff.description }}</h4>
          <b>Status:</b> <i>{{ spinoff.status }}</i><br>
        </div>
      </div> 
    {% endfor %}
  </div>
  {% assign secondary = site.data.airtable | where: "type", "Secondary analysis" | where: "mainProject", main.project %}
  <div class="container">
    {% for item in secondary %} <!--- loop over sec.analysis projects -->
      <div class="row">
        <div class="col-sm-1">  
        </div>
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{item.website }}"><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="40" align="right" style="margin-top:30px;"></a>
        </div>
        <div class="col-sm-9">
          <hr>
          <h4 style="margin-top:0.5em;"><a href=" https://{{item.website }}">{{ item.project }}:</a> {{ item.description }}</h4>
          <b>Status:</b> <i>{{ item.status }}</i><br>
        </div>
      </div> 
    {% endfor %}
  </div>
  <hr>
{% endfor %}


<h2 style="margin-top:2em;">Affiliated projects</h2>

{% assign affiliated_projects = site.data.airtable | where: "category", "Affiliated"%} <!--- affiliated projects -->
{% for affiliate in affiliated_projects %} <!--- loop over affiliated projects -->
  <div class="container">
      <div class="row">
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{affiliate.website }}" target="_blank"><img src="{{ affiliate.logoPath }}" alt="{{ affiliate.project}} logo" width="70"></a>
        </div>
        <div class="col-sm-10">
          <h3 style="margin-top:0.1em;"><a href=" https://{{affiliate.website }}" target="_blank">{{ affiliate.project }}:</a> {{ affiliate.description }}</h3>
          <i>Go to the <a href="https://{{ affiliate.website }}" target="_blank">{{ affiliate.project }} website</a> for more info</i><br>
        </div>
      </div> 
  </div>
  <hr>
{% endfor %}

