---
layout: page
---

The broader goals of **ManyBabies** come together through collaborative projects. They can be ***Main Projects***, ***Spin-off Projects***, or ***Secondary Analyses***.

<section>
  <div class="container">
    <div class="row">
      <div class="col-sm-2 col-xs-6" align="center">
        <img src="/assets/img/mainprojects.png" alt="spin-off pinwheel icon" width="75" height="75">
      </div>
      <div class="col-sm-10">
        <h4>Main Projects</h4>
        <i>Test a question about infant development of key theoretical or methodological interest. Numbered sequentially (e.g., MB1, MB2)</i>
        <br>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2 col-xs-6" align="center">
        <br>
        <img src="/assets/img/spinoff_icon.png" alt="spin-off pinwheel icon" width="75" height="75">
      </div>
      <div class="col-sm-10">
        <h4>Spin-off Projects</h4>
        <i>Build on the methods or data from the main projects; e.g., extending the study to a different population of infants (e.g., bilinguals; MB1B) or follow-up data collection (e.g., longitudinal correlation with CDIs; MB1L). Identified with a letter following the main project abbreviation</i>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2 col-xs-6" align="center">
        <br>
        <img src="/assets/img/analysis.png" alt="analysis" width="75" height="75">
      </div>
      <div class="col-sm-10">
        <h4>Secondary Analyses</h4>
        <i>Conducted on publicly-available ManyBabies data. In some cases, may include additional data not collected as part of MB (e.g., if an individual lab investigates relationships between their lab’s MB data and other data collected by their lab)</i>
      </div>
    </div>
  </div>
</section>

***

<!-- LIST OF PROJECTS -->

<h2 style="margin-top:1em">Empirical projects</h2>

{% assign main_projects = site.data.airtable | where: "type", "Main" | where: "category", "Empirical" %} <!--- empirical projects -->
{% for main in main_projects %} <!--- loop over main projects -->
  <div class="container">
      <div class="row">
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{main.website }}"><img src="{{ main.logoPath }}" alt="{{ main.project}} logo" width="70" style="margin-top:4px;"></a>
        </div>
        <div class="col-sm-10">
          <h3 style="margin-top:0em;"><a href=" https://{{main.website }}">{{ main.project }}:</a> {{ main.description }}</h3>
          <i>{{ main.tagline }}</i><br>
          <b>Status:</b> <code>{{ main.status }}</code><br>
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
          <a href="https://{{spinoff.website }}"><img src="{{ spinoff.logoPath }}" alt="{{ spinoff.project}} logo" width="40" align="right" style="margin-top:27px;"></a>
        </div>
        <div class="col-sm-9">
          <hr style="margin-top:0.8em; margin-bottom:0.3em;">
          <h4 style="margin-top:0.5em; margin-bottom:0.1em;"><a href=" https://{{spinoff.website }}">{{ spinoff.project }}:</a> {{ spinoff.description }}</h4>
          <b>Status:</b> <code>{{ spinoff.status }}</code><br>
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
          <a href="https://{{item.website }}"><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="40" align="right" style="margin-top:27px;"></a>
        </div>
        <div class="col-sm-9">
          <hr style="margin-top:0.8em; margin-bottom:0.3em;">
          <h4 style="margin-top:0.5em;margin-bottom:0.1em;"><a href=" https://{{item.website }}">{{ item.project }}:</a> {{ item.description }}</h4>
          <b>Status:</b> <code>{{ item.status }}</code><br>
        </div>
      </div> 
    {% endfor %}
  </div>
  <hr>
{% endfor %}

<h2 style="margin-top:1em">Methodological projects</h2>

{% assign main_projects = site.data.airtable | where: "type", "Main" | where: "category", "Methodological" %} <!--- methodological projects -->
{% for main in main_projects %} <!--- loop over main projects -->
  <div class="container">
      <div class="row">
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{main.website }}"><img src="{{ main.logoPath }}" alt="{{ main.project}} logo" width="70" style="margin-top:4px;"></a>
        </div>
        <div class="col-sm-10">
          <h3 style="margin-top:0.1em;"><a href=" https://{{main.website }}">{{ main.project }}:</a> {{ main.description }}</h3>
          <i>{{ main.tagline }}</i><br>
          <b>Status:</b> <code>{{ main.status }}</code><br>
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
          <a href="https://{{spinoff.website }}"><img src="{{ spinoff.logoPath }}" alt="{{ spinoff.project}} logo" width="40" align="right" style="margin-top:27px;"></a>
        </div>
        <div class="col-sm-9">
          <hr style="margin-top:0.8em; margin-bottom:0.3em;">
          <h4 style="margin-top:0.5em; margin-bottom:0.1em;"><a href=" https://{{spinoff.website }}">{{ spinoff.project }}:</a> {{ spinoff.description }}</h4>
          <b>Status:</b> <code>{{ spinoff.status }}</code><br>
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
          <a href="https://{{item.website }}"><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="40" align="right" style="margin-top:27px;"></a>
        </div>
        <div class="col-sm-9">
          <hr style="margin-top:0.8em; margin-bottom:0.3em;">
          <h4 style="margin-top:0.5em; margin-bottom:0.1em;"><a href=" https://{{item.website }}">{{ item.project }}:</a> {{ item.description }}</h4>
          <b>Status:</b> <code>{{ item.status }}</code  ><br>
        </div>
      </div> 
    {% endfor %}
  </div>
  <hr>
{% endfor %}

<h2 style="margin-top:1em">Affiliated projects</h2>

{% assign affiliated_projects = site.data.airtable | where: "category", "Affiliated"%} <!--- affiliated projects -->
{% for affiliate in affiliated_projects %} <!--- loop over affiliated projects -->
  <div class="container">
      <div class="row">
        <div class="col-sm-2 col-xs-6" align="center">
          <a href="https://{{affiliate.website }}" target="_blank"><img src="{{ affiliate.logoPath }}" alt="{{ affiliate.project}} logo" width="70" style="margin-top:4px;"></a>
        </div>
        <div class="col-sm-10">
          <h3 style="margin-top:0.1em;"><a href=" https://{{affiliate.website }}" target="_blank">{{ affiliate.project }}:</a> {{ affiliate.description }}</h3>
          <i>{{ affiliate.tagline }}</i><br>
          <b>Go to the <a href="https://{{ affiliate.website }}" target="_blank">{{ affiliate.project }} website</a> for more info</b><br> 
        </div>
      </div> 
  </div>
  <hr>
{% endfor %}


## New Projects

If you are interested in leading a new **ManyBabies** project (either a main project or a spin-off that would involve data collection across multiple labs), please check the [project proposal form](https://docs.google.com/document/d/1kbnK2us2Svfcf7X4TAI5YUw3_duUNAQoYINTuuWr1Jw/edit) and/or contact the **MB** [Governing Board](mailto:govboard@manybabies.org).

***

## Get Involved

We encourage everyone who is interested in developmental research to [get involved](%7B%7Bsite.baseurl%7D%7D/get_involved/)! Access to infants/infant lab is **not** a prerequisite.
