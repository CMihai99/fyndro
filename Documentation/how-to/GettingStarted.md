<!--
===-----------------------------------------------------------------------------------===
Copyright (c) 2021 Fyndro

For copyright information, see https://github.com/CMihai99/fyndro/blob/main/COPYING.
For a list of licenses we use, see https://github.com/CMihai99/fyndro/tree/main/LICENSES.
===-----------------------------------------------------------------------------------===
-->

# Getting Started with Fyndro Development

So you want to be a Fyndro developer? Welcome! While there is a lot to be learned about Fyndro in a
technical sense, this document's goal is to teach you everything you need to know to achieve this by
describing the process you need to go through, and hints on how to work with the community. It will also
try to explain some of the reasons why the community works like it does, and how to setup development.

## Introduction

Fyndro is written using HTML, SASS, Vue, and TypeScript.
A good understanding of HTML, SASS, and Vue is required for development.
TypeScript is not required unless you plan to do back-end work.

Please remember that you are trying to learn how to setup development,
as well as work with the existing development community. It is a diverse
group of people, with high standards for style and procedure. These standards
have been created over time based on what they have found to work best for such team.
Try to learn as much as possible about these standards ahead of time, as they
are well documented; do not expect people to adapt to your way of doing things.

## Software requirements

1.  Operating system: The supported operating system for developing Fyndro
    is currently only Windows. Linux support is hopefully coming this year.

2.  Disk space: Make sure that you have enough available disk space before
    starting. The source code, including full git history, requires about 2.5 MB.

Beware that using excessively old versions of these packages can cause indirect
errors that are very difficult to track down, so please, do not assume that you
can just update packages when obvious problems arise during build or operation.

## Cloning the project

1.  Create a directory for the whole project:

    ```sh
    mkdir fyndro-project
    cd fyndro-project
    ```

2.  Clone the sources:

    -   Via SSH (recommended):
        If you plan on contributing regularly, cloning over SSH provides a better
        experience. After you've [uploaded your SSH keys to GitHub](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/):

        ```sh
        git clone git@github.com:CMihai99/fyndro.git fyndro
        cd fyndro
        ```

    -   Via HTTPS:
        If you want to check out the sources as read-only, or are not
        familiar with setting up SSH, you can use HTTPS instead:

        ```sh
        git clone https://github.com/CMihai99/fyndro.git fyndro
        cd fyndro
        ```

    If you've already forked the project on GitHub at this stage, do not clone your fork to start off.
    We describe [how to setup your fork](#setting-up-your-fork) in a subsection below.

### Troubleshooting cloning issues

-   If `update-checkout` failed, double-check that the absolute path
    to your working directory does not have non-ASCII characters.

-   If `update-checkout` failed and the absolute path to your working directory had spaces
    in it, please [file a bug report](https://github.com/CMihai99/fyndro/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D)
    and change the path to work around it.

-   Before running `update-checkout`, double-check that `fyndro` is
    the only repository inside the `fyndro-project` directory. Otherwise,
    `update-checkout` may not clone the necessary dependencies.

## Installing full sources

When installing full sources, also known as stable releases, put the archive in a
directory where you have permissions and unpack it either manually, or by using Windows Powershell v5.0 and up:

```powershell
Expand-Archive -Force v1.x.zip; cd v1.x/v1.x
```

Where "x" is the version number. See [the releases](https://github.com/CMihai99/fyndro/releases) for version numbers.

## Installing dependencies

### Windows

Start by installing [SASS](https://sass-lang.com/install), [TypeScript](https://www.typescriptlang.org/download)
and, [Vue](https://vuejs.org/v2/guide/installation.html):

-   Via NPM:

    -   SASS:

        ```sh
        npm install -g sass --save-dev
        ```

    -   TypeScript:

        ```sh
        npm install typescript --save-dev
        ```

    -   Vue:

        ```sh
        npm install vue --save-dev
        ```

`--save-dev` is used with `npm install` when it signifies that the
package is a development dependency. A development dependency is any
package that absence will not affect the work of the application.

## Editing code

Make changes to the code as appropriate. Implement a shiny new feature!
Or fix a nasty bug! Update the documentation as you go! The codebase is your oyster!

Now that you have made some changes, you will need to rebuild...

### Setting up your fork

If you are building the toolchain for development and
submitting patches, you will need to setup a GitHub fork.

First, fork the `CMihai99/fyndro` [repository](https://github.com/CMihai99/fyndro.git),
using the "Fork" button in the web UI, near the top-right. This will create a
repository under `username/fyndro` with your GitHub username. Next, add it as a remote:

```sh
# Using 'my-remote' as a placeholder name.

# If you used SSH in step 2
git remote add my-remote git@github.com:username/fyndro.git

# If you used HTTPS in step 2
git remote add my-remote https://github.com/username/fyndro.git
```

Finally, create a new branch.

```sh
# Using 'my-branch' as a placeholder name

git checkout -b my-branch
git push --set-upstream my-remote my-branch
```

## Legal issues

The Fyndro source code is released under MIT. The Fyndro licensing rules and how to use `SPDX` identifiers in source code
are described in [/references/LicenseRules.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/references/LicenseRules.md).

## Bug reporting

[ReportingIssues.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/how-to/ReportingIssues.md)
describes how to report a possible bug, and specifies what kind of
information is needed by Fyndro developers to help track down the problem.

## Managing bug reports

One of the best ways to put into practice your skills is by fixing bugs reported by other people.
Not only you will help to make Fyndro more stable, but you'll also improve your skills,
and other developers will be aware of your presence.
Fixing bugs is one of the best ways to get merits among other developers,
because not many people like wasting time fixing other people's bugs.

To work on already reported bug reports, check the [bug-labeled issues](https://github.com/CMihai99/fyndro/labels/bug).
You may also want to check out https://cmihai99.github.io/fyndro/bugzilla for critical bugs.

## Working with the community

The goal of the Fyndro community is to provide the best possible choice
there is. When you submit a patch for acceptance, it will be reviewed on
its technical merits and those alone. So, what should you be expecting?

-   Criticism
-   Comments
-   Requests for change
-   Requests for justification
-   Silence

Remember, this is part of getting your patch into Fyndro. You have to be able
to take criticism and comments about your patches, evaluate them at a technical level
and either rework your patches or provide clear and concise reasoning as to
why those changes should not be made. If there are no responses to your posting,
wait a few days and try again, sometimes things get lost in the huge volume.

What should you not do?

-   Expect your patch to be accepted without question
-   Become defensive
-   Ignore comments
-   Resubmit the patch without making any of the requested changes

In a community that is looking for the best technical solution possible, there will always be
differing opinions on how beneficial a patch is. You have to be cooperative, and willing to adapt
your idea to fit within Fyndro. Or at least be willing to prove your idea is worth it.
Remember, being wrong is acceptable as long as you are willing to work toward a solution that is right.

It is normal that the answers to your first patch might simply be a list of a dozen things
you should correct. This does not imply that your patch will not be accepted, and it is not
meant against you personally. Simply correct all issues raised against your patch and resend it.

## Differences between the Fyndro community and corporate structures

The Fyndro community works differently than most traditional corporate development environments.
Here are a list of things that you can try to do to avoid problems:

```
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

Think of a teacher grading homework from a math student. The teacher does not
want to see the student's trials and errors before they came up with the solution.
They want to see the cleanest, most elegant answer. A good student knows this,
and would never submit her intermediate work before the final solution.

The same is true for Fyndro development. The maintainers and reviewers do not want
to see the thought process behind the solution to the problem one is solving.
They want to see a simple and elegant solution.

It may be challenging to keep the balance between presenting an elegant solution
and working together with the community and discussing your unfinished work.
Therefore it is good to get early in the process to get feedback to improve your work,
but also keep your changes in small chunks that they may get already accepted,
even when your whole task is not ready for inclusion now.

Also, it is not acceptable to send patches for inclusion
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

## If anything goes wrong

-   If you have problems that seem to be due to bugs, please check the maintainers to see if
    there is a particular person associated with the part that you are having trouble with.
    If there isn't anyone listed there, the second best thing to do is to report the problem on
    [GitHub issues](https://github.com/CMihai99/fyndro/issues/new/choose).

    -   In all bug-reports, please:
        -   tell which version you are talking about
        -   provide steps on how to reproduce the behavior
        -   apply screenshots (if possible)
        -   specify your setup (use common sense)

        In the `Additional context` section, specify if your problem is new or old.
        If you got any error messages related to your problem, paste them onto the `Error message` section.

## Next steps

Make sure you check out the following documents:

-   [SubmittingPatches.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/how-to/maintaining/SubmittingPatches.md)
    describes in explicit detail how to successfully create and
    send a patch, including how to obtain a current source tree.

-   [SecurityBugs.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/how-to/SecurityBugs.md)
    helps you notify the developers if you feel you have found a security problem, to help solve the issue.

-   [ManagementStyle.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/how-to/maintaining/ManagementStyle.md)
    describes how Fyndro maintainers operate and the shared ethos behind their methodologies.
    This is important reading for anyone new to development (or anyone simply curious about it),
    as it resolves a lot of common misconceptions and confusion about the unique behavior of maintainers.

-   [StableRules.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/references/StableRules.md)
    describes the rules on how the stable releases happen, and what
    to do if you want to get a change into one of these releases.

---

All of these things are sometimes very hard to do. It can take years to perfect
these practices (if at all). It's a continuous process of improvement that requires
a lot of patience and determination. But don't give up, it's possible.
