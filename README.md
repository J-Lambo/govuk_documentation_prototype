# Working with and publishing multiple prototypes

If you want to try out different design or content ideas you need to be able to publish multiple versions of the prototype. We do this by keeping each prototype in its own branch and then storing all the compiled versions of the prototypes in a 'prototype-builds' branch. This is the branch we publish.

Here’s a step by step guide:

## 1. Create your new prototype in a branch

The easiest way to create a new branch is like this:

git checkout -b [BRANCH NAME]

So, to create a branch called ‘v7’ you’d type:

``git checkout -b v7``

By convention we’re naming prototype branches ‘v1’, ‘v2’, ‘v3’ etc.


## 2. Add your prototype to the ‘prototype-builds’ branch

When you’re ready to publish, type:

``bundle exec middleman build``

This creates a subfolder called ‘build’ with your published prototype in it.
Drag the folder onto your desktop and rename it after the branch (e.g. ‘v7’ etc.)

Now switch to the ‘prototype-builds’ branch:

``git checkout prototype-builds``

Drag the renamed folder back into this branch. You’ll see all the other prototype folders in there.


## 3. Update the index file

Edit the index.html file in the root of the ‘prototype-builds’ branch so that it links to your new prototype. Add a brief description of the prototype so people know what’s different about it.

Don’t forget to commit all your changes.


## 4. Publish the ‘prototype-builds’ branch

From the ‘prototype-builds’ branch, type:

``./deploy.sh``

This will publish all your prototypes and the index page to https://alphagov.github.io/govuk_documentation_prototype/
