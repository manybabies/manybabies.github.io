---
layout: page
title: test-page
subtitle: page for testing stuff out
---


{% assign subscribable_projects = site.data.airtable | where_exp: "item", "item.listservSub" | where_exp: "item", "item.description" %}

- #### Subscribe to Listservs *(Most of our communications are done via email!)*
  - **Subscribe to our [general MB listserv](https://mailman.stanford.edu/mailman/listinfo/manybabies)** *(community announcements, monthly newsletter, etc.)*
  - **Subscribe to project-specific listservs**
    <div style="margin-left: 1em;">
      <details>   <!-- Expandable listserv list -->
        <summary><code>Subscribe directly to project listservs</code></summary> 
          <i>Most of our project listservs are Google Groups. To join a group directly, you must be logged-in to the browser with a Google-linked account. Follow the link and click on "join group". If you do not have a Google-linked account or need help joining groups, fill out the listserv form below.</i>
          <ul>
          {%- for project in subscribable_projects -%}
            <li><a href="{{ project.listservSub }}"><b>{{ project.project }}:</b></a> <i>{{ project.description }}</i></li> 
          {%- endfor -%} <!-- projects loop -->
          </ul>
      </details>
      <details>   <!-- Expandable form -->
        <summary><code>Fill out our listserv form</code></summary> <!--- expandable listserv form -->
          <iframe class="airtable-embed" src="https://airtable.com/embed/appRoqMKzcK3NsXt4/pagSEk7WDc7aVkmXt/form" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
      </details>
    </div>
- #### Email project leads
  - If you know which project you are interested in joining, you can **email** one or more of the Project Leads directly to ask how to get involved. Contact info for Project Leads is available via each [**project page**]({{site.baseurl}}/projects/).
- #### Come to Director Office Hours
  - You are welcome to join our **MB Director Office Hours** to talk about ManyBabies and ways to get involved. Times and links to join via Zoom can be found in our [**calendar**]({{site.baseurl}}/calendar/).
- #### Propose a Project
  * **Do you have an idea for a ManyBabies project?** Let us know! You can email Project Leads (for spin-off projects) or the [**Governing Board**](mailto:{{ site.data.global.contact.govboard }}) (for new projects), or **fill out our <a href="https://docs.google.com/document/d/1_bixhwCMPkMBDxh5epS1czue8emAakFmy0IG29oxQfQ/template/preview">Project Proposal Template</a>**.