---
layout: page
title: ManyBabies
subtitle: Multi-lab replications of influential experiments in developmental psychology
cover-img: /assets/img/curiosity-1910023_cut2.jpg
---

<!---
To-do:
- "sign up" page: create a Admnistrative Panel with Erin from PSA.
	- create the sign up/registration form
- open external links in new tabs? possible work around with kramdown - apply to all pages
- improve map (R): see "about"
- add a timestamp on each page, something like:
		https://tomkadwill.com/adding-last-modified-date-to-jekyll

Notes
- When using colors, use the color-blind palette from Wong (https://www.nature.com/articles/nmeth.1618.pdf?origin=ppub)
	- logo and project placeholders follow it.
--->

**ManyBabies (MB)** is a collaborative project for replication and best practices in developmental psychology research. Our goal is to bring researchers together to address difficult outstanding theoretical and methodological questions about the nature of early development and how it is studied. For example:

<!--- Do infants prefer agents who are seen to help over those who are seen to hinder?-->
- Do infants prefer helpers over hinderers?
<!--- What factors shape infants’ preferences for familiar and novel stimuli? -->
- When do infants like familiarity and when do they like novelty?
<!--How does Infant Direct Speech preference vary across age?-->
- Do babies find infant-directed speech (babytalk) more interesting than adult-directed speech?

Learn more [about]({{site.baseurl}}/about/) **MB's** origin, goals, people, and [stay up to date]({{site.baseurl}}/news/). Also, for a detailed index of collaborators (+ institutions, countries, studies), check the [**MB** collaborator dashboard](https://manybabies.shinyapps.io/shiny_mb_map/).

***

<!--
html to create a grid and add Projects info
images with link MUST use the class = "image" (.css from ManyPrimates)
-->
<section>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <p>    </p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 col-xs-6" align="center">
        <a href="{{site.baseurl}}{% link MB1.md %}" class="image" target="_blank"><img src="/assets/img/MB1_logo.png" alt="MB1 logo" width="150" height="150"></a>
      </div>
      <div class="col-sm-9">
        <a href="{{site.baseurl}}{% link MB1.md %}" class="image" target="_blank"><h3>MB1: Infant-Directed Speech Preference</h3></a>
        Do infants prefer infant-directed speech? Do age, method, and native language background matter?
      </div>
    </div>
    <div class="col-sm-12">
        <p>   </p>
    </div>
    <div class="row">
      <div class="col-sm-3 col-xs-6" align="center">
        <a href="https://psysciacc.org/006-trolley-problem/" target="_blank"><img src="/assets/img/trolley.png" alt="trolley" width="150" height="150"></a>
      </div>
      <div class="col-sm-9">
        <h3>Situational Factors Shape Moral Judgements in the Trolley Dilemma in a Culturally Diverse Sample</h3>
        <h4><a href="https://www.iast.fr/people/bence-bago" target="_blank">Bence Bagó</a></h4>
        <i>Institute for Advanced Study in Toulouse, France</i>
      </div>
    </div>
    <div class="col-sm-12">
        <p>   </p>
    </div>
    <div class="row">
      <div class="col-sm-3 col-xs-6" align="center">
        <img src="/assets/img/tools.png" alt="tools" width="150" height="150">
      </div>
      <div class="col-sm-9">
        <h3>Panel: Big Team Science Infrastructure</h3>
        <h4><a href="https://www.aggieerin.com/page/about/" target="_blank">Erin Buchanan</a>: creator of Canvas for BTS</h4>
        <i>Harrisburg University of Science and Technology, USA</i>
        <h4><a href="https://www.sydney.edu.au/science/about/our-people/academic-staff/alex-holcombe.html" target="_blank">Alex O. Holcombe</a>: co-creator of <i><a href="https://rollercoaster.shinyapps.io/tenzing/" target="_blank">tenzing</a></i></h4>
        <i>University of Sydney, Australia</i>
        <h4><a href="http://www.melissaklinestruhl.com" target="_blank">Melissa Kline Struhl</a>: Executive Director of <a href="https://lookit.mit.edu" target="_blank">Lookit</a></h4>
        <i>Massachusetts Institute of Technology, USA</i>
      </div>
    </div>
  </div>
</section>
<br>

<section>
	<header class="major">
		<h2>Projects</h2>
	</header>
      <p>
        The broader goals of <b>ManyBabies</b> come together in a set of <a href="{{site.baseurl}}{% link projects.md %}"> collaborative projects</a>. They are organized in <i>main projects</i> (either empirical or methodological), <i>spin-off projects</i>, and <i>secondary analyses</i>. Check out our main projects, together with their affiliated spin-off projects and secondary analyses:
      </p>
	<header class="major">
			<h3>Empirical Projects</h3>
	</header>
<br>
  <div class="container">
    <div class="row justify-content-around">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <a href="{{site.baseurl}}{% link MB1.md %}" class="image">
            <img src="assets/img/MB1_logo.png"  alt="MB1" width="150" height="150">
          </a>
          <h4>MB1: Infant-Directed Speech Preference</h4>
            Do infants prefer infant-directed speech? Do age, method, and native language background matter?
              <a href="{{site.baseurl}}{% link MB1.md %}" class="button">Learn more</a>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <a href="{{site.baseurl}}{% link MB2.md %}" class="image">
            <img src="assets/img/MB2_logo.png"  alt="MB2" width="150" height="150">
          </a>
          <h4>MB2: Theory of Mind in Infancy</h4>
            Do infants show anticipatory looking that reflects the false belief of another agent?
                <a href="{{site.baseurl}}{% link MB2.md %}" class="button">Learn more</a>
        </div>
  	</div>
<br>
    <div class="row justify-content-around">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <a href="{{site.baseurl}}{% link MB3.md %}" class="image">
            <img src="assets/img/MB3_logo.png"  alt="MB3" width="150" height="150">
          </a>
          <h4>MB3: Rule Learning</h4>
            Do infants learn and generalize identity-based rules from speech stimuli?
              <a href="{{site.baseurl}}{% link MB3.md %}" class="button">Learn more</a>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <a href="{{site.baseurl}}{% link MB4.md %}" class="image">
          <img src="assets/img/MB4_logo.png"  alt="MB4" width="150" height="150">
        </a>
        <h4>MB4: Social Evaluation</h4>
          Do infants prefer agents who are seen to help over those who are seen to hinder?
              <a href="{{site.baseurl}}{% link MB4.md %}" class="button">Learn more</a>
        </div>
    </div>
<br>
    <div class="row justify-content-around">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <a href="{{site.baseurl}}{% link MB5.md %}" class="image">
            <img src="assets/img/MB5_logo.png"  alt="MB5" width="150" height="150">
          </a>
          <h4>MB5: The Hunter & Ames Model of Infant Looking Preferences</h4>
            What factors shape infants’ preferences for familiar and novel stimuli?
              <a href="{{site.baseurl}}{% link MB5.md %}" class="button">Learn more</a>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <a href="{{site.baseurl}}{% link MB6.md %}" class="image">
          <img src="assets/img/MB6_logo.png"  alt="MB6" width="150" height="150">
        </a>
        <h4>MB6: Neonatal Imitation</h4>
          What is the nature of neonatal infants' imitation of facial gestures?
              <a href="{{site.baseurl}}{% link MB6.md %}" class="button">Learn more</a>
        </div>
		</div>
	</div>
<br>
	<header class="major">
			<h3>Methodological Projects</h3>
	</header>
<br>
	<div class="container">
		<div class="row justify-content-around">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <a href="{{site.baseurl}}{% link MB-AtHome.md %}" class="image">
            <img src="assets/img/MBAH_logo.png"  alt="MBAtHome" width="150" height="150">
          </a>
          <h4>MB-AtHome: Online Infant Data Collection</h4>
            Solutions for testing infants in their home, with a focus on measuring looks.
                <a href="{{site.baseurl}}{% link MB-AtHome.md %}" class="button">Learn more</a>
    		</div>
  			<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
    			<a href="{{site.baseurl}}{% link MB-demographics.md %}" class="image">
    				<img src="assets/img/MBDemo_logo.png"  alt="MB-Demographics" width="150" height="150">
    			</a>
    			<h4>MB-Demographics: Unified Demographics for ManyBabies Projects</h4>
    				In this project we are creating unified demographic forms for ManyBabies projects, with standardized and custom questions.
    			<a href="{{site.baseurl}}{% link MB-demographics.md %}" class="button">Learn more</a>
  			</div>
	  </div>
<br>
    <div class="row justify-content-around">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <a href="{{site.baseurl}}{% link MB-ManyWebcams.md %}" class="image">
            <img src="assets/img/MBMW_logo.png"  alt="MB-ManyWebcams" width="150" height="150">
          </a>
          <h4>MB-ManyWebcams: Web-based Eye Tracking for Infant Studies</h4>
            Automatic gaze detection via webcam.
          <a href="{{site.baseurl}}{% link MB-ManyWebcams.md %}" class="button">Learn more</a>
        </div>
		</div>
	</div>
<br>
	<header class="major">
			<h3>Spin-Off Projects</h3>
	</header>
	  <p>
	    <a href="{{site.baseurl}}{% link so_sa.md %}" class="image">
        List of Spin-Off Projects and Secondary Analyses  
      </a>
	  </p>
<br>
</section>


***

## Publications
Check out **ManyBabies** [reports and conference presentations]({{site.baseurl}}/publications/).

***

## Get involved
We encourage everyone who is interested in developmental research to [get involved]({{site.baseurl}}/get_involved/)! Access to infants/infant lab is **not** a prerequisite.

***

## Updates
If you are a **ManyBabies** collaborator, don't forget to keep an updated record of your MB-related activities and initiatives (e.g., workshops, talks etc.). In this [spreadsheet](https://docs.google.com/spreadsheets/d/1esnJTsPB0NJ2PP0fwmWIhSxShKLIN99Ga8ehCDyz3rQ/edit?usp=sharing) you can check a more complete list of **MB** activities and initiatives. To add new activities and initiatives, please complete [this form](https://forms.gle/qaynWvpYLP1J4eYd6).
