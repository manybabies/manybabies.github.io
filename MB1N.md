---
layout: page
title: MB1N
subtitle: Native Languages Follow-up
---

{% assign current_project = site.data.airtable | where: "project", page.title | first %}

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
        </ul>
      </div>
    </div>
  </div>
</div>


<p><img style="float: right;" src="/assets/img/MB1Nmap.png" height="250">
All infants from <a href="{{site.baseurl}}/MB1/"><b>MB1</b></a>, regardless of their linguistic background, heard stimuli recorded in North American English. In this ongoing project we ask how does Infant Directed Speech (IDS) preference to North American English in MB1 compare to IDS preference measured in non-English speaking babies’ native language. Infants who are primarily exposed to either French, Dutch, Norwegian, Czech, or Turkish will be tested in their native languages using the same procedure from MB1.</p>


***
## Project Leads
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
## Links
* **Materials, Protocols, and Documentation**: [MB1N-OSF](https://osf.io/9j87t/).
* **Preregistration**: [OSF](https://osf.io/gwdc9/)
* **Listserv**: [join here](https://groups.google.com/a/manybabies.org/g/mb1n-list).


***
## MB1N Contributors

We encourage everyone who is interested in the project to contact the Project Leads (see above). Please note that access to infants/an infant lab is **NOT** a prerequisite.

> NOTE: Default table ordering is by contributor's first name. You can filter, group, and/or sort entries by any field.

<iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/shrCUqVH6J8DtzAIl?backgroundColor=blueDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

> Project contributors can update/add info to the contributor list/MB Dashboard using <a href="{{ site.data.global.link.dashboard-form }}" target="_blank"><b>this form</b></a> 

<!--***
### Publication



-->
