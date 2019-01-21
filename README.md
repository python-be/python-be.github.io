# Python - The Belgian Community

As said, [Python.be](www.python.be) is your go-to-place for everything Python in Belgium.

Python has achieved remarkable popularity across the world and there are several events taking place from time to time.

Considering the versatile, fastest-growing, easy-to-grab programming language, there are lots of people and companies contributing together to the Python Community in Belgium.

You, being an individual or an organisation, a learner or an expert, a seeker or a contributor, are certainly going to benefit with this platform.

* JOIN US

If you are an organisation located in Belgium and using Python, you can officially be a part of the Belgian Community and increase you visibility and collaborations.

* CONTRIBUTING TO THE WEBSITE

If you are already a part of the Python Belgian Community, you are most welcome to add Events and Job Offers at your site.
You can contribute by a simple pull/merge-requests.

The Website is built in Lektor that uses beautiful Static Content Management System to build dynamic websites out of flat files. 
So it is super easy to add more content to it anytime. Infact, there is a UI for this purpose, so you need not dig into the code to find out what does what.

For downloading and knowing more about Lektor, you can visit the Official documentation [here.](https://www.getlektor.com)

* CLONING THE WEBSITE

The website resides on [gitlab.](https://gitlab.adimian.com/website/python-be.github.io) 
You can start by cloning the website from:

(i) HTTPS: https://gitlab.adimian.com/website/python-be.github.io.git

(ii) SSH : git@ssh.gitlab.adimian.com:website/python-be.github.io.git
   - Useful links     
     - [Generating SSH Keys](https://help.github.com/articles/connecting-to-github-with-ssh/)
     - [Which url to use](https://help.github.com/articles/which-remote-url-should-i-use/#cloning-with-ssh)


* ADDING CONTENT 

  - Once you have cloned the website and have installed Lektor, you can run the website on your localhost by the following command:

        $ lektor server
      
  - On [localhost:5000](https://localhost:5000), You should see the website running.
  - Once it is running on the browser, the on the top right corner you should see a pencil like icon for `Edit` 
  - This icon will take you to the UI for editing the content of the website.
  - If you want to edit the content through the code, that is simple as well. 
    You just have to go through the organisation of the project.
  
* PROJECT ORGANISATION

  - According to Lektor, a project is comprised of following directories at the very basic level:
  assets, content, models and templates
  
    (i)   assets:
     
     - This contains all the static files such as CSS, JS and images
    
    (ii)  content: 
    
     - This contains corresponding `contents.lr` file for each page/block of the application.
    
     - The `contents.lr` file at `python-be.github.io/content/contents.lr` is the global one, meaning that it has the content of the home page.
    
     - Some of the pages like events, partners and testimonials are designed with a Parent-child page approach, so the main 'content' directory has 
       subdirectory for each of these parent blocks and the parent-block directory has subdirectory for each child. 
    
     - There is a `contents.lr` file corresponding to each child-directory. 
       For example in `content/events/fosdem2019` there is a `contents.lr` file which contains the content of the event 'fosdem2019'. 
       
     - When we have attachments specific to a page or block, we can put them in the respective directory along with its 'contents.lr' file. 
       For example attachments for the event 'flask_web_development' will be placed at `content/events/flask_web_development/`
    
    (iii) models
    
     - This directory contains `.ini` files corresponding to each table/model used in the application.
     
     - Each `.ini` file has some number of fields and respective information for the model fields. 
     
     - In our application, we have different sections on the same page (Home page) which are called `flowblocks` in Lektor.
       So we have an additional directory 'flowblocks' that works same as 'models' but this contains 
       `.ini` files for the flowblocks or different sections of the page rather than a new page.
    
    (iv)  templates
    
     - This contains jinja2 templates for each page of the application.
     
     - These are `.html` pages corresponding to each endpoint page.
     
     - For sections/flowblocks as used in our application, the templates directory contains a sub-directory call `blocks`
       which contains jinja templates for the respective sections.
       
     - Each of these templates `extend` the template `layout.html` and in Lektor, by default `page.html` is the home page.
     

Note: The Blog functionality is yet unused, Lektor has inbuilt blog functionality, So we can start a blog anytime by just providing a navigation link for it.

- ADDING A NEW EVENT:

  - Go to `/content/events/` create a directory with the name of event.
  - Create a `contents.lr` file inside this new directory and fill relevant event information as per other events' contents.lr
  - Add attachments(if any)
  - Then save and run the application:

        $ lektor server
  
  - If everything looks good you can send a merge request and wait for it to be reviewed by the community and finally go live on the website.
  
- POSTING A NEW JOB OFFER:

  - Go to `/content/jobs/` create a directory with the title of the job.
  - Create a `contents.lr` file inside this new directory and fill relevant information regarding the job.
    For reference, you can see the `contents.lr` file in the directory called 'Sample_job_Offer'
  - Then save and run the application:

        $ lektor server
  
  - If everything looks good you can send a merge request and wait for it to be reviewed by the community and finally posted on the website.
  