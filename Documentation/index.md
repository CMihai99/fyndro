<!-- SPDX-License-Identifier: MIT-only -->

# The Andro documentation

This is the top level of andro's documentation tree.
The documentation, like the website itself, is very much a work in progress;
that is especially true as we work to integrate our many scattered documents into a coherent whole.
Please note that improvements to the documentation are welcome;
[join our discord server](https://discord.gg/4Z22w6tA) or
[contact the documentation team](mailto:andro.documentation@gmail.com) if you want to help out.

## Introduction to development

These manuals contain overall information about how to develop Andro.
Knowing how things are done will make the process of getting your changes merged much easier.

```sh
.. toctree::

   process/index
   maintainer/index
```

## API documentation

These articles get into the details of how our web APIs work
from the point of view of an Andro developer working with the back-end
which operates them to automatically webscrape content.
Much of the information here is taken directly from the source,
with supplemental material added as needed.

```sh
.. toctree::

   api/
```

## Bot documentation

These articles get into the details of how our bots work
from the point of view of an Andro developer working with the back-end
which operates them to collect the information
from the API and paste it in required fields.
Much of the information here is taken directly from the source,
with supplemental material added as needed.

```sh
.. toctree::
   
   bot/
```


## Translations

```sh
.. toctree::

   translations/es_ES
   translations/it_IT
   translations/ja_JP
   translations/zh_CN
```