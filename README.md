NAU MOCKUP SITE GENERATOR
=========================

Settings and plugins to generate static mockup microsites for our Nau team from uploaded images.

The tool is based on GulpJS


HOW TO
------

```bash
npm install
npm run build
```

If you have install Gulp globally, just run `gulp`

CONTENTS STRUCTURE
------------------

    /
    |-- mockups                                     Root of all mockups
        |-- clients                                 Site sections
        |-- internal    
        |-- products
            |-- PET                                 Projects
            |-- KaraHappy
                |-- info.txt                        Project info
                |-- Wireframe                       Phases
                |-- Phase 1     
                    |-- 20140710                    Revision by Date, format YYYYMMDD
                    |-- 20140715
                        |-- Screen 1                [optional] Journeys / Screens / Components
                        |-- Screen 2
                            |-- 00.Landing.jpg      Images with proper naming & order
                            |-- 01.Login.jpg
                            |-- 02.Forgot password.jpg

EXPECTED OUTPUT
---------------

    /_site
    |-- products
        |-- KaraHappy
            |-- index.html                          Project brief intro + phases listing (from info.txt)
            |-- phase-1                             Folder name is transformed to URL friendly
                |-- 20140710
                |-- 20140715                        The thumbnail in project index will point directly to this latest revision
                    |-- screen-1
                        |-- index.html              Show all jpg in this folder



GENERATOR FLOW
--------------

1. Go inside each site section (mannually set as 3 gulp tasks)
2. Read project folder name & info.txt and transform to project objects
3. [TBD]