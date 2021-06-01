<!-- SPDX-License-Identifier: MIT -->

# How to do Fyndro development

This is the be-all, end-all document on this topic. It contains instructions on how
to become a Fyndro developer and how to learn to work with the development community.
It tries to not contain anything related to the technical aspects of programming,
but will help point you in the right direction for that.

## Introduction

So, you want to learn how to become a Fyndro developer? This document's goal
is to teach you everything you need to know to achieve this by describing
the process you need to go through, and hints on how to work with the community.
It will also try to explain some of the reasons why the community works like it does.

Fyndro is written using HTML, the SASS preprocessor, Vuejs, and TypeScript
(with some bot and API parts written in Python). A good understanding of HTML and SASS is required for development.
Vuejs, TypeScript, and Python is not required unless you plan to do back-end development.

Please remember that you are trying to learn how to work with the existing development community.
It is a diverse group of people, with high standards for coding, style and procedure.
These standards have been created over time based on what they have found to work best for such team.
Try to learn as much as possible about these standards ahead of time, as they are well documented;
do not expect people to adapt to your way of doing things.

## Legal issues

The Fyndro source code is released under MIT. Please see the [COPYING](https://github.com/CMihai99/fyndro/blob/main/COPYING)
file. The Fyndro licensing rules and how to use `SPDX` identifiers in source code
are described in the [LicenseRules](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/LicenseRules.md) file.
If you have further questions about licenses, please contact a lawyer.

## Documentation

Fyndro has a large range of documents that are invaluable for learning
how to interact with Fyndro community. When new features are added, it is recommended
that new documentation files are also added which explain how to use the feature.

Here is a list of files that are required reading:

-   [/admin-guide/README.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/admin-guide/README.md)

    This file gives a short background on Fyndro and describes what is necessary to do
    to configure and build Fyndro. People who are new to Fyndro should start here.

-   [/process/Compiling.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/Compiling.md)

    This file gives a list of the minimum levels of various software packages
    that are necessary to build and run Fyndro successfully.

-   [/process/CodingStyle.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/CodingStyle.md)

    This describes the Fyndro coding style, and some of the rationale behind it. All new code
    is expected to follow the guidelines in this document. Most maintainers will only accept patches
    if these rules are followed, and many people will only review code if it is in the proper style.

-   [/process/SubmittingPatches.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/SubmittingPatches.md)

    These files describe in explicit detail how to successfully
    create and send a patch, including how to obtain a current source tree.

Following these rules will not guarantee success (as all patches are subject to scrutiny
for content and style), but not following them will almost always prevent it.

Other excellent descriptions on how to create patches properly are:

-   [/admin-guide/SecurityBugs.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/admin-guide/SecurityBugs.md)

    If you feel you have found a security problem in the Fyndro, please follow the steps
    in this document to help notify the developers, and help solve the issue.

-   [/process/ManagementStyle.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/ManagementStyle.md)

    This document describes how Fyndro maintainers operate and the shared ethos behind
    their methodologies. This is important reading for anyone new to Fyndro development
    (or anyone simply curious about it), as it resolves a lot of common misconceptions
    and confusion about the unique behavior of maintainers.

-   [/process/StableRules.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/StableRules.md)

    This file describes the rules on how the stable releases happen,
    and what to do if you want to get a change into one of these releases.

-   [/process/FyndroDocs.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/FyndroDocs.md)

    A list of external documentation that pertains to Fyndro development. Please consult this list
    if you do not find what you are looking for within the in-Fyndro documentation.

## Becoming a Fyndro developer

Before making any actual modifications to the Fyndro code, it is imperative to understand
how the code in question works. For this purpose, nothing is better than reading
through it directly (most tricky bits are commented well).

## Bug reporting

The [ReportingIssues](https://github.com/CMihai99/fyndro/blob/main/Documentation/admin-guide/ReportingIssues.md)
file describes how to report a possible bug, and specifies what kind of
information is needed by Fyndro developers to help track down the problem.

## Managing bug reports

One of the best ways to put into practice your skills is by fixing bugs reported by other people.
Not only you will help to make Fyndro more stable, but you'll also improve your skills,
and other developers will be aware of your presence.
Fixing bugs is one of the best ways to get merits among other developers,
because not many people like wasting time fixing other people's bugs.

To work on already reported bug reports, check the [bug-labeled issues]().
You may also want to check https://cmihai99.github.io/fyndro/bugzilla for critical bugs.

## Working with the community

The goal of the Fyndro community is to provide the best possible website finder there is.
When you submit a patch for acceptance, it will be reviewed on its technical merits
and those alone. So, what should you be expecting?

-   criticism
-   comments
-   requests for change
-   requests for justification
-   silence

Remember, this is part of getting your patch into Fyndro. You have to be able
to take criticism and comments about your patches, evaluate them at a technical level
and either rework your patches or provide clear and concise reasoning as to
why those changes should not be made. If there are no responses to your posting,
wait a few days and try again, sometimes things get lost in the huge volume.

What should you not do?

-   expect your patch to be accepted without question
-   become defensive
-   ignore comments
-   resubmit the patch without making any of the requested changes

In a community that is looking for the best technical solution possible, there will always be
differing opinions on how beneficial a patch is. You have to be cooperative, and willing to adapt
your idea to fit within Fyndro. Or at least be willing to prove your idea is worth it.
Remember, being wrong is acceptable as long as you are willing to work toward a solution that is right.

It is normal that the answers to your first patch might simply be a list of a dozen things
you should correct. This does *not* imply that your patch will not be accepted, and it is *not*
meant against you personally. Simply correct all issues raised against your patch and resend it.

## Differences between the Fyndro community and corporate structures

The Fyndro community works differently than most traditional corporate development environments.
Here are a list of things that you can try to do to avoid problems:

```console
Good things to say regarding your proposed changes:

    - "This solves multiple problems."
    - "This deletes 200 lines of code."
    - "Here is a patch that explains what I am trying to describe."
    - "Here is a series of small patches that..."

Bad things you should avoid saying:

    - "We did it this in some way, so therefore it must be good..."
    - "I've being doing this for 10 years, so..."
    - "Here is my 100 page design document that describes my idea"
    - "I've been working on this for 6 months..."
    - "Here's a 2000 line patch that..."
    - "I rewrote all of the current mess, and here it is..."
    - "I have a deadline, and this patch needs to be applied now."
```

Another way the Fyndro community is different than most traditional software engineering
work environments is the faceless nature of interaction. One benefit of using email as the
primary form of communication is the lack of discrimination based on gender or race.
Our work environment is accepting of women and minorities because all you are is an email address.
The international aspect also helps to level the playing field because you can't guess gender
based on a person's name. A man may be named Andrea and a woman may be named Pat.

The language barrier can cause problems for some people who are not comfortable with English.
A good grasp of the language can be needed so it is recommended that you check
your emails to make sure they make sense in English before sending them.

## Break up your changes

The Fyndro community does not gladly accept large chunks of code dropped on it all at once.
The changes need to be properly introduced, discussed, and broken up into tiny, individual portions.
This is almost the exact opposite of what companies are used to doing. Your proposal should
also be introduced very early in the development process, so that you can receive feedback
on what you are doing. It also lets the community feel that you are working with them,
and not simply using them as a dumping ground for your feature. However, don't send 30 patches
at once, your patch series should be smaller than that almost all of the time.

The reasons for breaking things up are the following:

-   Small patches increase the likelihood that your patches will be applied,
    since they don't take much time or effort to verify for correctness.
    A 5 line patch can be applied by a maintainer with barely a second glance.
    However, a 500 line patch may take hours to review for correctness
    (the time it takes is exponentially proportional to the size of the patch).

    Small patches also make it very easy to debug when something goes wrong.
    It's much easier to back out patches one by one than it is to dissect
    a very large patch after it's been applied (and broken something).

-   It's important not only to send small patches, but also to rewrite
    and simplify (or simply re-order) patches before submitting them.

Here is an analogy from Michael:

```console
Think of a teacher grading homework from a math student. The teacher does not
want to see the student's trials and errors before they came up with the solution.
They want to see the cleanest, most elegant answer. A good student knows this,
and would never submit her intermediate work before the final solution.

The same is true for Fyndro development. The maintainers and reviewers do not want
to see the thought process behind the solution to the problem one is solving.
They want to see a simple and elegant solution.
```
which contains instructions on how to become a Fyndro developer and how to learn to work
with the development community. It tries to not contain anything related to the technical aspects
of programming, but will help point you in the right direction for that.
It may be challenging to keep the balance between presenting an elegant solution
and working together with the community and discussing your unfinished work.
Therefore it is good to get early in the process to get feedback to improve your work,
but also keep your changes in small chunks that they may get already accepted,
even when your whole task is not ready for inclusion now.

Also, realize that it is not acceptable to send patches for inclusion
that are unfinished and will be "fixed up later."

## Justify your changes

Along with breaking up your patches, it is very important for you to let the community
know why they should add this change. New features must be justified as being needed and useful.

## Document your changes

When sending in your patches, pay special attention to what you say in the text. This information
will become the changelog information for the patch, and will be preserved for everyone to see for ever.
It should describe the patch completely, containing:

-   why the change is necessary
-   the overall design approach in the patch
-   implementation details
-   testing results

---

All of these things are sometimes very hard to do. It can take years to perfect these practices
(if at all). It's a continuous process of improvement that requires a lot of patience and determination.
But don't give up, it's possible.
