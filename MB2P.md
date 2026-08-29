---
layout: page
title: MB2P
subtitle: Measuring Pupil Dilation in Response to Expected and Unexpected Events
---

{% assign current_project = site.data.airtable | where: "project", page.title | first %}

***

<div class="container">
  <div class="box-gray" style="box-shadow: -10px 10px {{ current_project.color }};">
    <div class="row justify-content-around">
      <div class="col-lg-4" align="center">
        <br>
        <img src="{{ current_project.logoPath }}" width="150">
      </div>
      <div class="col-lg-8" align="left">
        <h2 style="color:{{ current_project.color }};">Project Overview</h2>
        <ul>
          <li><i>Status:</i> <code>{{ current_project.status }}</code></li>
        </ul>
      </div>
    </div>
  </div>
</div>

***
## A violation-of-expectation paradigm building on the main MB2 study

<p>The main dependent variable of the <a href="{{site.baseurl}}/MB2/"><b>MB2</b></a> study is children’s anticipatory looking behavior, i.e., how much they anticipate the protagonist to behave in ways congruent to their previously established goals. Crucially, and as part of the experimental design, children never actually see the final outcome of the protagonist’s initiated behavior (in the test trials). In this spin-off to the main MB2 study, we are interested in children’s responses to seeing a goal-congruent vs. a goal-incongruent outcome. We ask whether children are surprised if the protagonist (the bear) responds in a way that is incongruent with their previously established goal (to follow the mouse). To measure surprise, we capture changes in children’s pupil dilation in response to both outcomes. To this end, we have added a final scene at the end of the study, i.e., after the final video was presented, which shows the chaser (the bear) exiting the tube either on the side where the chasee (the mouse) is currently hiding or on opposite side. In addition to capturing changes in pupil dilation, we are also capturing children’s looking time in response to the congruent and incongruent events. </p>


<section>
  <div class="container">
    <div class="row">
      <div class="col-sm-11" align="center">
        <img src="/assets/img/MB2P_design.png">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-11" align="left">
      <i>Table 1.</i> Illustrations of the outcomes within the VOE-design. In this example, the mouse is hiding in the left box. The green box marks the congruent outcome while the red box marks the incongruent outcome. Note that by nature of the counterbalancing (across participants) there will also be versions in which the bear exits on the right side but this being the congruent outcome (as opposed being the incongruent outcome in this example). In the ignorance condition, there is no belief congruent or incongruent outcome.
      </div>
    </div>
  </div>
</section>

***
## Links
* **Listserv**: [join here](https://groups.google.com/a/manybabies.org/g/mb2p-list)
* **Materials, Protocols, and Documentation**: [MB2 lab manual](https://docs.google.com/document/d/1xAw_EbmvRl1Rj3iAVASazyb4HPxoECfvKaf_7zfFi0o/edit?usp=sharing)
* **Slack**: <a href="{{ site.data.global.link.slack-invite }}" target="_blank">MB workspace</a> (*join the #mb2p-pupillometry channel*)
* **MB2**: [main project page]({{site.baseurl}}/MB2/)


***
## Leads
<ul>
  {% for lead in current_project.leads %}
    <li>
      {% if lead.orcid %}
        <b><a href="{{ lead.site }}" target="_blank">{{ lead.name }}</a></b>, <i>{{ lead.institution }}</i> <a href="{{ lead.orcid }}" target="_blank"><img src="/assets/img/orcid.png" height="15"></a> <a href="mailto:{{ lead.email }}">[email]</a>
      {% else %}
        {{ lead.name }}, <i>{{ lead.institution }}</i>
      {% endif %}{% unless forloop.last %}<br> {% endunless %}
    </li>
  {% endfor %}
</ul>

***
## MB2P Contributors

We encourage everyone who is interested in the project to contact Project Lead [Robert Hepach](mailto:robert.hepach@psy.ox.ac.uk). Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrAhBGjpK3eZvztf?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 


<!-- ### Publications -->
