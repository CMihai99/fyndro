<!--
===--------------------------------------------------------------------------===
Copyright (c) 2021 Fyndro
Licensed under MIT

See https://github.com/CMihai99/fyndro/blob/main/COPYING for license information
See https://github.com/CMihai99/fyndro/tree/main/LICENSES for a list of licenses
===--------------------------------------------------------------------------===
-->

# Rebasing and merging

Maintaining a branch, as a general rule, requires a familiarity with the Git source-code
management system. Git is a powerful tool with a lot of features; as is often the case
with such tools, there are right and wrong ways to use those features. This document looks
in particular at the use of rebasing and merging. Maintainers often get in trouble when
they use those tools incorrectly, but avoiding problems is not actually all that hard.

One thing to be aware of in general is that, unlike many other projects,
Fyndro is not scared of seeing merge commits in its development history.
Indeed, given the future-scaling of the project, avoiding merges would be nearly impossible.
Some problems encountered by maintainers result from a desire to avoid merges,
while others come from merging a little too often.

The guidelines laid out below are just that: guidelines.

There will always be situations that call out for a different solution, and these guidelines
should not prevent developers from doing the right thing when the need arises.

But one should always think about whether the need has truly arisen
and be prepared to explain why something abnormal needs to be done.

## Rebasing

``Rebasing`` is the process of changing the history of a series of commits within a repository.
There are two different types of operations that are referred to as rebasing since both
are done with the ``git rebase`` command, but there are significant differences between them:

-   Changing the parent (starting) commit upon which a series of patches is built.
    *For example: A rebase operation could take a patch set built on the previous release
    and base it, instead, on the current release.* We'll call this operation "reparenting" below.

-   Changing the history of a set of patches by fixing (or deleting) broken commits, adding patches,
    adding tags to commit changelogs, or changing the order in which commits are applied.
    In the following text, this type of operation will be referred to as "history modification".

The term ``rebasing`` will be used to refer to both of the above operations.
Used properly, rebasing can yield a cleaner and clearer development history;
used improperly, it can obscure that history and introduce bugs.

There are a few rules of thumb that can help developers to avoid the worst of rebasing:

-   History that has been exposed to the world beyond your private system should
    usually not be changed. Others may have pulled a copy of your tree and built
    on it; modifying your tree will create pain for them.

That said, there are always exceptions. Developers will sometimes expose an unstable branch
for others to test with or for automated testing services. If you do expose a branch that
may be unstable in this way, be sure that prospective users know not to base work on it.

-   Do not rebase a branch that contains history created by others.
    If you have pulled changes from another developer's repository,
    you are now a custodian of their history. You should not change it.
    With few exceptions, for example, a broken commit in a tree like this
    should be explicitly reverted rather than disappeared via history modification.

-   Do not reparent a tree without a good reason to do so. Just being on a newer base
    or avoiding a merge with an upstream repository is not generally a good reason.

-   Realize that reparenting a patch series (or making significant history modifications)
    changes the environment in which it was developed and, likely, invalidates
    much of the testing that was done. A reparented patch series should, as a general rule,
    be treated like new code and retested from the beginning.

A frequent cause of merge-window trouble is when Mihai is presented with a patch series
that has clearly been reparented, often to a random commit, shortly before
the pull request was sent. The chances of such a series having been adequately tested
are relatively low, as are the chances of the pull request being acted upon.

## Merging

``Merging`` is a common operation in our development process. Work is accumulated
in 2 different trees, which may contain multiple topics; each topic is usually
developed independently of the others. So naturally, at least one merge will
be required before any given branch finds its way into an upstream repository.

### Merging from lower-level trees

Larger branches tend to have a lot more maintainers, with the lower-level maintainers
sending pull requests to the higher levels. Acting on such a pull request will almost
certainly generate a merge commit; that is as it should be. In fact, branch maintainers
may want to use the ``--no-ff`` flag to force the addition of a merge commit in the rare cases
where one would not normally be created so that the reasons for the merge can be recorded.
The changelog for the merge should, for any kind of merge, say why the merge is being done.

Maintainers at all levels should be using signed tags on their pull requests
and upstream maintainers should verify the tags when pulling branches.
Failure to do so threatens the security of the development process as a whole.

As per the rules outlined above, once you have merged somebody else's history
into your tree, you cannot rebase that branch, even if you otherwise would be able to.
