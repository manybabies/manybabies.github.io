---
layout: page
title: MB1
project_id: MB1
subtitle: Infant-Directed Speech Preference
---

{% assign current_project = site.data.airtable | where: "project", page.project_id | first %}

***

<div class="container">
  <div class="box-gray" style="box-shadow: -10px 10px {{current_project.color}};">
    <div class="row justify-content-around">
      <div class="col-lg-4" align="center">
        <br>
        <img src="{{ current_project.logoPath}}" width="150">
      </div>
      <div class="col-lg-8" align="left">
        <h2 style="color:{{current_project.color}};">Project Overview</h2>
        <ul>
          <li><i>Status:</i> <code>{{ current_project.status}}</code></li>
          <li><i>69 participating labs collected data in 16 countries</i></li>
          <li><i>2,329 babies tested</i></li>
          <li><i>149 authors on</i> <a href="https://doi.org/10.1177/2515245919900809" target="_blank"><b>AMPPS</b></a> <i>publication</i></li>
          <li><i><b>EXPLORE/ACCESS <a href="{{site.baseurl}}/mb1-datapage/" target="_blank">MB1 DATA</a></b></i></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***

<p>In the first ManyBabies project, we replicated a robust finding from developmental literature: <b>infants’ preference for infant-directed speech (IDS) over adult-directed speech (ADS)</b>. IDS is characterized by a higher pitch, greater pitch excursions, and shorter utterances when compared to ADS. Exposure to IDS has been shown to improve word segmentation and word learning. We asked if infants have a preference for IDS, and how this preference varies across age, native language background, and method. </p>
 
<p><img style="float: right;" src="/assets/img/ILL.photoshot.baby.in.booth.jpeg" width="175">Sixty-nine labs from 16 countries participated and collected data from 2,329 infants (range: 3-15 months old). We focused on three primary methods for assessing infants’ interest: single-screen central fixation, eye tracking, and the head-turn preference procedure (HPP).</p>


## Results
* **Confirmed that infants prefer to listen to infant-directed speech relative to adult-directed speech**
* Stronger effect in older children, in those children for whom the stimuli matched their native language and dialect (North American English, or NAE), and in data from labs using the head-turn preference procedure (magnitude of 0.05 SDs per month), **suggesting a modulation by experience, maturation, or both**
* IDS preference **even among participants whose native language or dialect was not NAE**
* **Effect strongest with the HPP** relative to central-fixation or eye-tracking approaches; one potential interpretation of this finding is that the greater effort on the part of the infant in the HPP (i.e., turning the head, as opposed to making small eye movements) leads to stronger engagement in the task and therefore to stronger effects 

<img src="/assets/img/mb1_plot2_lq_replace.jpg">
<br>

<img src="/assets/img/mb1_plot1_lq_replace.jpg">


***
## Links
* **Protocols and Documentation**: [MB1-OSF](https://osf.io/re95x/)
* **Data, analysis code, and study materials**: [MB1-OSF Registration](https://osf.io/gf7vh/resources?mode=&revisionId=&view_only=)
* **Walkthrough videos**: [Databrary](https://nyu.databrary.org/volume/896)
* **News**: [MB1-news]({{site.baseurl}}/tags/#MB1)


***
## Project Leads
* [**Michael Frank**](https://web.stanford.edu/~mcfrank/), *Stanford University, United States* [[email]](mailto:mcfrank@stanford.edu)
* [**Melanie Soderstrom**](https://home.cc.umanitoba.ca/~soderstr/), *University of Manitoba, Canada* [[email]](mailto:M_Soderstrom@umanitoba.ca)


***
## MB1 Contributors
> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrzAXtyn7qNfHIYe?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>


***
## Publications

{% assign pubs = site.data.publications | where: "project", page.project_id %}
{% for pub in pubs %} <!--- loop over pubs for specified project -->
  <div class="container">
    <div class="row">
      <div class="col-sm-2" align="center">
        <a href="https://{{pub.website }}"><img src="{{ pub.logoPath }}" alt="{{ pub.project}} logo" width="70" style="margin-top:4px;"></a>        
      </div>
      <div class="col-sm-10">
        {{ pub.authorsCondensed }} ({{ pub.year }}). <b>{{pub.title}}</b>. <i>{{pub.journal}}</i>, <i>{{pub.issue}}</i>({{ pub.issue }}), {{ pub.pages }}. <a href="{{ pub.journalLink }}" target="_blank">{{ pub.journalLink}}</a>
        <details>
          <summary><code>View full author list</code></summary> <!--- expandable author list with orcids -->
          <div style="margin-left: 2em;">
            {% for author in pub.authors %}
              {% if author.orcid %}
                {{ author.name }} <a href="{{ author.orcid }}"><img src="/assets/img/orcid.png" height="15"></a> 
              {% else %}
                {{ author.name }}
              {% endif %}{% unless forloop.last %}<br> {% endunless %}
            {% endfor %}
          </div>
        </details>
      </div>
    </div>
  </div>  
{% endfor %}


***
## Spin-off Projects & Secondary Analyses

<ul>
  {% assign spinoffs = site.data.airtable | where: "type", "Spin-off" | where: "mainProject", page.project_id %}
  {% for spinoff in spinoffs %} <!--- loop over spinoff projects -->
    <li><img src="{{ spinoff.logoPath }}" alt="{{ spinoff.project}} logo" width="20"> <b><a href="https://{{spinoff.website }}">{{spinoff.project}}</a>: {{ spinoff.description }} </b></li>
  {% endfor %}
  {% assign secondary = site.data.airtable | where: "type", "Secondary analysis" | where: "mainProject", page.project_id %}
  {% for item in secondary %} <!--- loop over spinoff projects -->
    <li><img src="{{ item.logoPath }}" alt="{{ item.project}} logo" width="20"> <b><a href="https://{{item.website }}">{{item.project}}</a>: {{ item.description }} </b></li>
  {% endfor %}
</ul>


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
