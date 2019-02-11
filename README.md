# Python - The Belgian Community

[Python.be](www.python.be) is your go-to-place for everything Python in Belgium.

Python has achieved remarkable popularity across the world and there are several events taking place from time to time.

Considering the versatile, fastest-growing, easy-to-grab programming language, there are lots of people and companies contributing together to the Python Community in Belgium.

You, being an individual or an organisation, a learner or an expert, a seeker or a contributor, are certainly going to benefit with this platform.

## JOIN US

If you are an organisation located in Belgium and using Python, you can officially be a part of the Belgian Community and increase you visibility and collaborations.
You may also be interested in participating to our mailing list: https://mail.python.org/pipermail/belgium/

## CONTRIBUTING TO THE WEBSITE

If you are already a part of the Python Belgian Community, 
you are most welcome to add Events and Job Offers at your site.
You can also add testimonials about how Python and the Community has turned out for you.
You can add more **Partners** and **Sponsers** to the site, it is really a collective effort to bring up the Community.

You can contribute to website by a simple pull request mechanism.

The Website is built in **Lektor**, a Python framework to build dynamic websites out of flat files. 
It is super easy to add more content to it anytime. In fact, there is a UI for this purpose, so you need not dig into the code to find out what does what.

For downloading and knowing more about Lektor, you can visit the Official documentation [here.](https://www.getlektor.com)

### CLONING THE WEBSITE

The website resides on [GitHub.](https://github.com/python-be/python-be.github.io)
- Branch `master` contains the published website
- Branch `source` contains the Lektor source 

### ADDING CONTENT 

  - Once you have cloned the website and have installed Lektor, you can run the website on your localhost by the following command:

        $ lektor server
      
  - On [localhost:5000](https://localhost:5000), You should see the website running.
  - Once it is running on the browser, the on the top right corner you should see a pencil like icon for `Edit` 
  - This icon will take you to the UI for editing the content of the website.
  - If you want to edit the content through the code, that is simple as well. 
    You just have to go through the organisation of the project.
  
### PROJECT ORGANISATION

According to *Lektor*, a project is comprised of following directories at the very basic level:
assets, content, models and templates
  
####   assets:
     
  - This contains all the static files such as CSS, JS and images
    
####   content: 
    
  - This contains corresponding `contents.lr` file for each page/block of the application.
    
  - The `contents.lr` file at **_python-be.github.io/content/contents.lr_** is the global one, meaning that it has the content of the home page.
    
  - Some of the pages like *events, partners and testimonials* are designed with a Parent-child page approach, 
    so the main **content** directory has subdirectory for each of these parent blocks 
    and the parent-block directory has subdirectory for each child. 
    
  - There is a `contents.lr` file corresponding to each child-directory. 
    For example in **_content/events/fosdem2019_** there is a `contents.lr` file which contains the content of the event 'fosdem2019'. 
       
  - When we have attachments specific to a page or block, we can put them in the respective directory along with its **contents.lr** file. 
    For example attachments for the event `flask_web_development` will be placed at **_content/events/flask_web_development/_**
    
####   models
    
  - This directory contains `.ini` files corresponding to each table/model used in the application.
     
  - Each `.ini` file has some number of fields and respective information for the model fields. 
     
  - In our application, we have different sections on the same page (Home page) which are called `flowblocks` in Lektor.
    So we have an additional directory **flowblocks** that works same as **models** but this contains 
    `.ini` files for the **flowblocks** or different sections of the page rather than a new page.
    
####   templates
    
  - This contains **jinja2** templates for each page of the application.
     
  - These are `.html` pages corresponding to each endpoint.
     
  - For *sections* or *flowblocks* as used in our application, the templates directory contains a sub-directory called **blocks**
       which contains jinja templates for the respective sections.
       
  - Each of these templates `extend` the special template `layout.html` 
       to fetch HTML content common for each template, 
       and in *Lektor*, by default `page.html` is accessed as the home page.
     

**Note:** The Blog functionality is yet unused, Lektor has inbuilt blog functionality, So we can start a blog anytime by just providing a navigation link for it.

### ADDING A NEW PARTNER:

  - Go to `/content/partners/` create a directory with the name of partner.
  - Create a `contents.lr` file inside this new directory and fill relevant partner information as per other partners' contents.lr
  - Add logo(.png file) of the company in this directory
  - Then save and run the application:

        $ lektor server
  
  - If everything looks good you can send a merge request and wait for it to be reviewed by the community and finally go live on the website.

### ADDING A NEW EVENT:

  - Go to `/content/events/` create a directory with the name of event.
  - Create a `contents.lr` file inside this new directory and fill relevant event information as per other events' contents.lr
  - Add attachments(if any) to this directory
  - Then save and run the application:

        $ lektor server
  
  - If everything looks good you can send a merge request and wait for it to be reviewed by the community and finally go live on the website.
  
### POSTING A NEW JOB OFFER:

  - Go to `/content/jobs/` create a directory with the title of the job(should follow unique constraint for the name of directory so you can combine employer name too).
  - Create a `contents.lr` file inside this new directory and fill relevant information regarding the job.
    There is an extra directory called **_Sample_job_Offer_**, which you can refer to create a new job offer.
    Or you can simply copy **_Sample_job_Offer_** directory to jobs, **rename** it and **add information** to its `contents.lr file and you are good to go.
  - Then save and run the application:

        $ lektor server
  
  - If everything looks good you can send a merge request and wait for it to be reviewed by the community and finally posted on the website.
  
### ADDING A TESTIMONIAL:

  - Go to `/content/testimonials/` create a directory with the name of company.
  - Create a `contents.lr` file inside this new directory and fill relevant information and **quote** as per other testimonials' contents.lr
  - Add logo(.png file) of the company in this directory
  - Then save and run the application:

        $ lektor server
  
  - If everything looks good you can send a merge request and wait for it to be reviewed by the community and finally go live on the website.
