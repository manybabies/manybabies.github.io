---
layout: page
title: ManyBabies
subtitle: A global consortium of developmental researchers
cover-img: /assets/img/curiosity-1910023_cut2.jpg
---


**ManyBabies (MB)** is a collaborative project for replication and best practices in developmental psychology research. Our goal is to bring researchers together to address difficult outstanding theoretical and methodological questions about the nature of early development and how it is studied. 

* **[About ManyBabies]({{site.baseurl}}/about/)** *(principles, roles & responsibilities, etc.)*
* **[People]({{site.baseurl}}/people/)**, **[Committees]({{site.baseurl}}/committees/)**, & **<a href="{{site.baseurl}}/dashboard/" target="_blank">Contributor Dashboard</a>**
* **[Resources]({{site.baseurl}}/resources/)** *(calendar, publications, data validator, OSF, github, etc.)*
* **[Events]({{site.baseurl}}/events/)** *(workshops, webinars, etc.)*
* **[News and Updates]({{site.baseurl}}/news/)** *(newletters, publication news, etc.)*
* **[Get Involved]({{site.baseurl}}/get_involved/)** *(all are welcome, access to an infant lab is not required!)*
* **[Support ManyBabies]({{site.baseurl}}/support/)** *(make a tax-deductible donation to support our work!)*
<br>
<br>

***

## Projects

The broader goals of <b>ManyBabies</b> come together in a set of collaborative projects. They are organized in <i>main projects</i> (either empirical or methodological), <i>spin-off projects</i>, and <i>secondary analyses</i>. Below is a list of our main projects, together with their affiliated spin-off projects and secondary analyses. More info is available on the **[Projects]({{site.baseurl}}/projects/)** page.

<!--- empirical projects -->
<h3 style="margin-top:40px;">Empirical Projects</h3>

{% assign main_projects = site.data.airtable | where: "type", "Main" | where: "category", "Empirical" %}
{% for main in main_projects %} <!--- loop over main projects -->
  <div class="container">
    <div class="row">
      <div class="col-sm-3 col-xs-6" align="center">
        <a href="https://{{main.website }}"><img src="{{ main.logoPath }}" alt="{{ main.project}} logo" width="100" height="100" style="margin-top:0px; filter: drop-shadow(-4px 4px 2px #7F7F7F);"></a>
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


<h2 style="margin-top:40px;">Affiliated Networks</h2>

<section>
  <div class="container">
    <div class="row">
      <div class="col-sm-3 col-xs-6" align="center">
        <br>
        <a href="https://manymanys.github.io/"><img src="/assets/img/manymanys-logo.png" alt="ManyManys logo" width="100" height="100" style="margin-top:0px; filter: drop-shadow(-4px 4px 2px #7F7F7F);"></a>
      </div>
      <div class="col-sm-9">
        <h4 style="margin-top:30px;"><a href="https://manymanys.github.io/">ManyManys</a></h4>
        <i>A large-scale collaboration on comparative cognition and behavior across animal taxa</i><br>
        <b>Project:</b> <a href="https://manymanys.github.io/MM1/" target="_blank">MM1: Reversal Learning</a><br>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-3 col-xs-6" align="center">
        <a href="https://connect-btss.github.io/"><img src="/assets/img/connect_stacked_default.png" alt="CONNECT logo" width="125" style="margin-top:10px;"></a>
      </div>
      <div class="col-sm-9">
        <h4><a href="https://connect-btss.github.io/">CONNECT</a></h4>
        ManyBabies is a proud member of the <b>CONNECT partnership</b>, an <a href="https://sshrc-crsh.canada.ca/en.aspx">SSHRC</a>-funded partnership that unites Big Team Social Science (BTSS) networks and community organizations dedicated to improving science. To learn more, visit the <a href="https://connect-btss.github.io/">CONNECT website</a>.<br>
        <a href="https://sshrc-crsh.canada.ca/en.aspx"><img src="/assets/img/sshrc-logo.jpg" alt="SSHRC logo" width="200" style="margin-top:10px;"></a>
      </div>
    </div>
  </div>
</section>


