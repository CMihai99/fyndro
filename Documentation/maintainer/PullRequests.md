<!-- SPDX-License-Identifier: MIT -->

# Pull Requests: The guide to submitting your pull requests

This chapter describes how maintainers can create
and submit pull requests to other maintainers.
This is useful for transferring changes from
one maintainers tree to another maintainers tree.

## Creating a branch

To start with, you will need to have all the changes you wish to include
in the pull request on a separate branch. Typically you will base this branch
off of a branch in the developers tree whom you intend to send the pull request to.

In order to create the pull request you must first tag the branch
that you have just created. It is recommended that you choose a meaningful tag name,
in a way that you and others can understand, even after some time. A good practice
is to include in the name an indicator of the subsystem of origin and the target kernel version.

A pull request with miscellaneous stuff for vue/components, to be applied at the version 1.9.2
could be named as `comp-misc-1.9.2`. If such tag would be produced
from a branch named `comp-misc-next`, you would be using the following command:

```console
git tag -s comp-misc-1.9.2 comp-misc-next
```

Otherwise, if it would be produced from the `main` branch, you would be using the following command:

```console
git tag -s comp-misc-1.9.2 main
```

That will create a signed tag called `comp-misc-1.9.2` based on
the last commit in the `comp-misc-next` branch.

Michael will only accept pull requests based on a signed tag. Other
maintainers may differ.

When you run the command above, git will drop you into an editor and ask
you to describe the tag. In this case, you are describing a pull request,
so outline what is contained here, why it should be merged,
and what/if any testing has been done. All of this information will end up
in the tag itself, and then in the merge commit that the maintainer makes if
or when they merge the pull request. So write it up well, as it will be in the tree for ever.

As said by Michael:

```console
Anyway, at least to me, the important part is the message.
I want to understand what I'm pulling, and why I should pull it.
I also want to use that message as the message for the merge,
so it should not just make sense to me, but make sense as a historical record too.

Note: If there is something odd about the pull request,
that should very much be in the explanation. If you're touching files
that you don't maintain, explain why. I will see it in the diffstat anyway,
and if you didn't mention it, I'll just be extra suspicious.
And when you send me new stuff after the merge window
(or even bug-fixes, but ones that look scary), explain not just what they do
and why they do it, but explain the timing.

I will take both what you write in the pull request and in the signed tag,
so depending on your workflow, you can either describe your work in the signed tag
(which will also automatically make it into the pull request email),
or you can make the signed tag just a placeholder with nothing interesting in it,
and describe the work later when you actually send me the pull request.

And yes, I will edit the message. Partly because I tend to do just trivial formatting
(the whole indentation and quoting, etc.), but partly because part of the message
may make sense for me at pull time (describing the conflicts and your personal issues
for sending it right now), but may not make sense in the context of a merge commit message,
so I will try to make it all make sense. I will also fix any spelling mistakes
and bad grammar I notice, particularly for non-native speakers (but also for native ones :P).


- Michael
```

Also, an example pull request:

```console
Comp/Misc patches for 1.9.2

Here is the big comp/misc patch set for the 1.9.2 merge window.
Contained in here is the normal set of new functions added:

- lorem_ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut placerat orci nulla pellentesque. Iaculis eu non diam
  phasellus vestibulum. Quis lectus nulla at volutpat diam ut.
  Nulla aliquet enim tortor at auctor urna nunc id cursus.
  Diam phasellus vestibulum lorem sed.

- dolor_sit_amet: Dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut placerat orci nulla pellentesque.

All of these patches have been successfully tested in the latest releases,
and the original problems that it found have all been resolved.

Signed-off-by: Your Name <youremail@yourhost.com>
```

The tag message format is just like a git commit id. One line at the top
for a "summary subject" and one sign-off line at the bottom.

Now that you have a local signed tag, you need to push it up to where it
can be retrieved:

```console
git push origin comp-misc-1.9.2
```

## Creating a pull request

The last thing to do is create the pull request message. Git will do this for you
with the `git request-pull` command, but it needs a bit of help determining what you want to pull,
and on what to base the pull against (to show the correct changes to be pulled and the diffstat).
The following command(s) will generate a pull request:

```console
git request-pull main https://github.com/CMihai99/fyndro.git comp-misc-1.9.2
```

This is asking git to compare the difference from the 'comp-misc-1.9.2' tag location,
to the head of the `main` branch (which in my case points to the last location
in Michael's tree that I diverged from).

If the comp-misc-1.9.2 tag is not present in the repository that I am
asking to be pulled from, git will complain saying it is not there,
a handy way to remember to actually push it to a public location.

The output of `git request-pull` will contain the location of the git tree
and specific tag to pull from, and the full text description of that tag
(which is why you need to provide good information in that tag).
It will also create a diffstat of the pull request, and a shortlog
of the individual commits that the pull request will provide.

## Submitting a pull request

A pull request is submitted in the same way as an ordinary patch.