<!-- SPDX-License-Identifier: MIT -->

# Submitting Patches: Getting your code submitted

This document contains a large number of suggestions in a relatively terse format.
For detailed information on how the development process works,
see [DevelopmentProcess.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/DevelopmentProcess.md).
Also, read [SubmitChecklist.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/SubmitChecklist.md)
for a list of items to check before submitting code.

This documentation assumes that you're using git to prepare your patches. If you're unfamiliar
with git, you learn using it, since it will make your life as a developer much easier.

## Obtain a current source tree

If you do not have a repository with the current source handy, use git to obtain one.
You'll want to start with the mainline repository, which can be grabbed with:

```sh
git clone https://github.com/CMihai99/fyndro.git
```

## Describe your changes

Describe your problem. Whether your patch is a one-line bug fix or 500 lines
of a new feature, there must be an underlying problem that motivated you
to do this work. Convince the reviewer that there is a problem worth fixing
and that it makes sense for them to read past the first paragraph.

Describe user-visible impact. Straight up crashes and lockups are pretty convincing,
but not all bugs are that blatant. Even if the problem was spotted during code review,
describe the impact you think it can have on users.

Quantify optimizations and trade-offs. If you claim improvements in performance,
memory consumption, stack footprint, or binary size, include numbers that back them up.
But also describe non-obvious costs. Optimizations usually aren't free but trade-offs
between CPU, memory, and readability; or, when it comes to heuristics, between different workloads.
Describe the expected downsides of your optimization so that the reviewer can weigh costs against benefits.

Once the problem is established, describe what you are actually doing for about it
in technical detail. It's important to describe the change in plain English for the reviewer
to verify that the code is behaving as you intend it to.

The maintainer will thank you if you write your patch description in a form which can
be easily pulled into Fyndro's source code management system, git, as a commit log.

Solve only one problem per patch. If your description starts to get long,
that's a sign that you probably need to split up your patch.

When you submit or resubmit a patch or patch series, include the complete
patch description and justification for it. Don't just say that this is
version N of the patch (series). Don't expect the subsystem maintainer
to refer back to earlier patch versions or referenced URLs to find the
patch description and put that into the patch. I.e., the patch (series)
and its description should be self-contained. This benefits both the maintainers
and reviewers. Some reviewers probably didn't even receive earlier versions of the patch.

Describe your changes in imperative mood, e.g. "make lorem do ipsum" instead of
"(This patch) makes lorem do ipsum" or "(I) changed lorem to do ipsum",
as if you are giving orders to the codebase to change its behaviour.

If the patch fixes a logged bug entry, refer to that bug entry by number or URL.
However, try to make your explanation understandable without external resources.
In addition to giving a URL to a mailing list archive or bug, summarize
the relevant points of the discussion that led to the patch as submitted.

If you want to refer to a specific commit, don't just refer to the SHA-1 ID
of the commit. Please also include the oneline summary of the commit, to make it
easier for reviewers to know what it is about. For example:

```
Commit e21d2170f36602ae2708 ("video: remove unnecessary platform_set_drvdata()")
removed the unnecessary platform_set_drvdata(), but left the variable "dev" unused, delete it.
```

You should also be sure to use at least the first twelve characters of the SHA-1 ID.
The repository holds a lot of objects, making collisions with shorter IDs a real possibility.
Bear in mind that, even if there is no collision with your six-character ID now,
that condition may change two years from now.

If your patch fixes a bug in a specific commit, e.g. you found an issue using
`git bisect`, please use the 'Fixes:' tag with the first 12 characters of the SHA-1 ID,
and the one line summary. Do not split the tag across multiple lines, tags are exempt
from the "wrap at 75 columns" rule in order to simplify parsing scripts. For example:

```
Fixes: 54a4f0239f2e ("KVM: MMU: make kvm_mmu_zap_page() return the number of pages it actually freed")
```

The following `git config` settings can be used to add a pretty format for
outputting the above style in the `git log` or `git show` commands:

```sh
[core]
    abbrev = 12
[pretty]
    fixes = Fixes: %h (\"%s\")
```

An example call:

```
$ git log -1 --pretty=fixes 54a4f0239f2e
Fixes: 54a4f0239f2e ("KVM: MMU: make kvm_mmu_zap_page() return the number of pages it actually freed")
```

## Separate your changes

Separate each logical change into a separate patch.

For example, if your changes include both bug fixes and performance enhancements
for a single file, separate those changes into two or more patches. If your changes
include an API update, and a new file which uses that new API, separate those into two patches.

On the other hand, if you make a single change to numerous files, group those changes
into a single patch. Thus a single logical change is contained within a single patch.

The point to remember is that each patch should make an easily understood change
that can be verified by reviewers. Each patch should be justifiable on its own merits.

If one patch depends on another patch in order for a change to be complete, that is ok.
Simply note "this patch depends on patch X" in your patch description.

When dividing your change into a series of patches, take special care to ensure
that it builds and runs properly after each patch in the series.
Developers using `git bisect` to track down a problem can end up splitting
your patch series at any point; they will not thank you if you introduce bugs in the middle.

If you cannot condense your patch set into a smaller set of patches,
then only post 10 or so at a time and wait for review and integration.

## Style-check your changes

Check your patch for basic style violations, details of which can be found in
[/process/CodingStyle.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/CodingStyle.md).
Failure to do so simply wastes the reviewers time and will get your patch rejected.

One significant exception is when moving code from one file to another.
In this case you should not modify the moved code at all in the same patch which moves it.
This clearly delineates the act of moving the code and your changes. This greatly aids review
of the actual differences and allows tools to better track the history of the code itself.

## Select the recipients for your patch

You should always copy the appropriate maintainer(s) on any patch to code that they maintain;
look through [MAINTAINERS.md](https://github.com/CMihai99/fyndro/blob/main/MAINTAINERS.md)
and the source code revision history to see who those maintainers are.

For severe bugs, a short embargo may be considered to allow distributors to get the patch
out to users; in such cases, obviously, the patch should not be sent to any public lists.
See [/admin-guide/SecurityBugs.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/admin-guide/SecurityBugs.md).

## No MIME, no links, no compression, no attachments.  Just plain text

Mihai and other developers need to be able to read and comment on the changes
you are submitting. It is important for a developer to be able to "quote"
your changes, so that they may comment on specific portions of your code.

## Respond to review comments

Your patch will almost certainly get comments from reviewers on ways in which the patch
can be improved. You must respond to those comments;
ignoring reviewers is a good way to get ignored in return. Review comments or questions that do not lead to a code
change should almost certainly bring about a comment or changelog entry
so that the next reviewer better understands what is going on.

Be sure to tell the reviewers what changes you are making and to thank them for their time.
Code review is a tiring and time-consuming process, and reviewers sometimes get grumpy.
Even in that case, though, respond politely and address the problems they have pointed out.

## Don't get discouraged or impatient

After you have submitted your change, be patient and wait.
Reviewers are busy people and may not get to your patch right away.

Once upon a time, patches used to disappear into the void without comment, but the development
process works more smoothly than that now.  You should receive comments within a week or so;
if that does not happen, make sure that you have sent your patches to the right place. Wait
for a minimum of one week before resubmitting or pinging reviewers - possibly longer during merge windows.

## Sign your work

To improve tracking of who did what, especially with patches that can percolate to their final resting
place through several layers of maintainers, we've introduced a "Sign-off" procedure on patches.

The sign-off is a simple line at the end of the explanation for the patch, which certifies
that you wrote it or otherwise have the right to pass it on as an open-source patch.

### Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

-   (a) The contribution was created in whole or in part by me and I have the right
    to submit it under the open source license indicated in the file; or

-   (b) The contribution is based upon previous work that, to the best of my knowledge,
    is covered under an appropriate open source license and I have the right under
    that license to submit that work with modifications, whether created in whole
    or in part by me, under the same open source license (unless I am permitted to submit
    under a different license), as indicated in the file; or

-   (c) The contribution was provided directly to me by some other person
    who certified (a), (b) or (c) and I have not modified it.

-   (d) I understand and agree that this project and the contribution are public
    and that a record of the contribution (including all personal information I submit with it,
    including my sign-off) is maintained indefinitely and may be redistributed consistent
    with this project or the open source license(s) involved.

Then you just add a line saying:

```
Signed-off-by: Author <author@mail>
```

Using your real name (sorry, no pseudonyms or anonymous contributions).
This will be done for you automatically if you use `git commit -s`.
Reverts should also include "Signed-off-by". `git revert -s` does that for you.

Any further SoBs (Signed-off-by:'s) following the author's SoB are from people
handling and transporting the patch, but were not involved in its development.
SoB chains should reflect the real route a patch took as it was propagated to
the maintainers and ultimately to Mihai, with the first SoB entry
signalling primary authorship of a single author.

## When to use Acked-by:, and Co-developed-by:

The Signed-off-by: tag indicates that the signer was involved in the
development of the patch, or that he/she was in the patch's delivery path.

If a person was not directly involved in the preparation or handling
of a patch but wishes to signify and record their approval of it then
they can ask to have an Acked-by: line added to the patch's changelog.

Acked-by: is often used by the maintainer of the affected code
when that maintainer neither contributed to nor forwarded the patch.

Acked-by: is not as formal as Signed-off-by:. It is a record that the acker has at least
reviewed the patch and has indicated acceptance. Hence patch mergers will sometimes
manually convert an acker's "yep, looks good to me" into an Acked-by:
(but note that it is usually better to ask for an explicit ack).

Acked-by: does not necessarily indicate acknowledgement of the entire patch.
For example: If a patch affects multiple subsystems and has an Acked-by: from
one maintainer then this usually indicates acknowledgement of just the part which
affects that maintainer's code. Judgement should be used here. When in doubt people
should refer to the original discussion in the mailing list archives.

Co-developed-by: states that the patch was co-created by multiple developers;
it is used to give attribution to co-authors (in addition to the author attributed
by the From: tag) when several people work on a single patch. Since Co-developed-by:
denotes authorship, every Co-developed-by: must be immediately followed by a Signed-off-by:
of the associated co-author. Standard sign-off procedure applies, i.e. the ordering
of Signed-off-by: tags should reflect the chronological history of the patch insofar
as possible, regardless of whether the author is attributed via From: or Co-developed-by:.
Notably, the last Signed-off-by: must always be that of the developer submitting the patch.

The From: tag is optional when the From: author is also the person
(and email) listed in the From: line of the email header.

Example of a patch submitted by the From: author:

```
<changelog>

Co-developed-by: First Co-Author <first@coauthor.example.org>
Signed-off-by: First Co-Author <first@coauthor.example.org>
Co-developed-by: Second Co-Author <second@coauthor.example.org>
Signed-off-by: Second Co-Author <second@coauthor.example.org>
Signed-off-by: From Author <from@author.example.org>
```

Example of a patch submitted by a Co-developed-by: author:

```
From: From Author <from@author.example.org>

<changelog>

Co-developed-by: Random Co-Author <random@coauthor.example.org>
Signed-off-by: Random Co-Author <random@coauthor.example.org>
Signed-off-by: From Author <from@author.example.org>
Co-developed-by: Submitting Co-Author <sub@coauthor.example.org>
Signed-off-by: Submitting Co-Author <sub@coauthor.example.org>
```

## Using Reported-by:, Tested-by:, Reviewed-by:, Suggested-by: and Fixes:

The Reported-by tag gives credit to people who find bugs and report them and it
hopefully inspires them to help us again in the future. Please note that if the
bug was reported in private, then ask for permission first before using the Reported-by tag.

A Tested-by: tag indicates that the patch has been successfully tested (in some environment)
by the person named. This tag informs maintainers that some testing has been performed,
provides a means to locate testers for future patches, and ensures credit for the testers.

Reviewed-by:, instead, indicates that the patch has been reviewed
and found acceptable according to the Reviewer's Statement:

### Reviewer's statement of oversight

By offering my Reviewed-by: tag, I state that:

-   (a) I have carried out a technical review of this patch to evaluate its
    appropriateness and readiness for inclusion into the mainline.

-   (b) Any problems, concerns, or questions relating to the patch have been
    communicated back to the submitter. I am satisfied with the submitter's
    response to my comments.

-   (c) While there may be things that could be improved with this submission,
    I believe that it is, at this time, (1) aworthwhile modification,
    and (2) free of known issues which would argue against its inclusion.

-   (d) While I have reviewed the patch and believe it to be sound, I do not
    (unless explicitly stated elsewhere) make any warranties or guarantees that
    it will achieve its stated purpose or function properly in any given situation.

A Reviewed-by tag is a statement of opinion that the patch is an appropriate
modification without any remaining serious technical issues.
Any interested reviewer (who has done the work) can offer a Reviewed-by tag
for a patch. This tag serves to give credit to reviewers and to inform maintainers
of the degree of review which has been done on the patch. Reviewed-by: tags,
when supplied by reviewers known to understand the subject area and to perform
thorough reviews, will normally increase the likelihood of your patch getting into Fyndro.

Both Tested-by and Reviewed-by tags, once received on mailing list from tester or reviewer,
should be added by author to the applicable patches when sending next versions. However
if the patch has changed substantially in following version, these tags might not be
applicable anymore and thus should be removed. Usually removal of someone's Tested-by
or Reviewed-by tags should be mentioned in the patch changelog (after the '---' separator).

A Suggested-by: tag indicates that the patch idea is suggested by the person named
and ensures credit to the person for the idea. Please note that this tag should not
be added without the reporter's permission, especially if the idea was not posted
in a public forum. That said, if we diligently credit our idea reporters,
they will, hopefully, be inspired to help us again in the future.

A Fixes: tag indicates that the patch fixes an issue in a previous commit. It is used
to make it easy to determine where a bug originated, which can help review a bug fix.
This tag also assists the stable team in determining which stable versions should receive your fix.
This is the preferred method for indicating a bug fixed by the patch.

Attaching a Fixes: tag does not subvert the stable rules process. For more information, please read
[/process/StableRules.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/StableRules.md).

## The canonical patch format

This section describes how the patch itself should be formatted.

The canonical patch subject line is:

```
Subject: [PATCH 001/123] subsystem: summary phrase
```

The canonical patch message body contains the following:

-   A `from` line specifying the patch author, followed by an empty line
    (only needed if the person sending the patch is not the author).

-   The body of the explanation, line wrapped at 75 columns, which
    will be copied to the permanent changelog to describe this patch.

-   An empty line.

-   The `Signed-off-by:` lines, described above, which will also go in the changelog.

-   A marker line containing simply `---`.

-   Any additional comments not suitable for the changelog.

-   The actual patch (`diff` output).

The `subsystem` in the Subject should identify which area is being patched.

The `summary phrase` in the Subject should concisely describe the patch it contains.
The `summary phrase` should not be a filename. Do not use the same `summary phrase`
for every patch in a whole patch series (where a `patch series`
is an ordered sequence of multiple, related patches).

Bear in mind that your `summary phrase` becomes a globally-unique identifier for that patch.
It propagates all the way into the `git` changelog. The `summary phrase` may later be used
in developer discussions which refer to the patch. People will want to search for the
`summary phrase` to read discussions regarding that patch. It will also be the only thing
that people may quickly see when, two or three months later, they are going through perhaps
thousands of patches using tools such as `gitk` or `git log --oneline`.

For these reasons, the `summary` must be no more than 70-75 characters,
and it must describe both what the patch changes, as well as why the patch
might be necessary. It is challenging to be both succinct and descriptive,
but that is what a well-written summary should do.

The `summary phrase` may be prefixed by tags enclosed in square brackets:
The tags are not considered part of the summary phrase, but describe how
the patch should be treated. Common tags might include a version descriptor
if the multiple versions of the patch have been sent out in response to comments
(i.e., "v1, v2, v3"), or "RFC" to indicate a request for comments.

If there are four patches in a patch series the individual patches may be
numbered like this: 1/4, 2/4, 3/4, 4/4. This assures that developers
understand the order in which the patches should be applied and that
they have reviewed or applied all of the patches in the patch series.

Here are some good example Subjects:

```
Subject: [PATCH 2/5] ext2: improve scalability of bitmap searching
Subject: [PATCH v2 01/27] x86: fix eflags tracking
Subject: [PATCH v2] sub/sys: Condensed patch summary
Subject: [PATCH v2 M/N] sub/sys: Condensed patch summary
```

The `from` line must be the very first line in the message body, and has the form:

```
From: Patch Author <author@example.com>
```

The `from` line specifies who will be credited as the author of the patch
in the permanent changelog.  If the `from` line is missing, then the `From:`
line from the email header will be used to determine the patch author in the changelog.

The explanation body will be committed to the permanent source changelog,
so should make sense to a competent reader who has long since forgotten
the immediate details of the discussion that might have led to this patch.
Including symptoms of the failure which the patch addresses (log messages, oops
messages, etc.) are especially useful for people who might be searching the commit
logs looking for the applicable patch. The text should be written in such detail
so that when read weeks, months or even years later, it can give the reader
the needed details to grasp the reasoning for why the patch was created.

If a patch fixes a compile failure, it may not be necessary to include
all of the compile failures; just enough that it is likely that someone
searching for the patch can find it. As in the `summary phrase`,
it is important to be both succinct as well as descriptive.

The `---` marker line serves the essential purpose of marking
for patch handling tools where the changelog message ends.

One good use for the additional comments after the `---` marker is for a `diffstat`,
to show what files have changed, and the number of inserted and deleted lines per file.
A `diffstat` is especially useful on bigger patches. If you are going to include a `diffstat`
after the `---` marker, please use `diffstat` options`-p 1 -w 70` so that filenames are listed
from the top of the source tree and don't use too much horizontal space (easily fit in 80
columns, maybe with some indentation). (`gi`` generates appropriate diffstats by default.)

Other comments relevant only to the moment or the maintainer, not suitable
for the permanent changelog, should also go here. A good example of such comments might be
`patch changelogs` which describe what has changed between the v1 and v2 version of the patch.

Please put this information after the ``---`` line which separates the changelog from
the rest of the patch. The version information is not part of the changelog which gets
committed to the git tree. It is additional information for the reviewers. If it's
placed above the commit tags, it needs manual interaction to remove it. If it is
below the separator line, it gets automatically stripped off when applying the patch:

```
<commit message>
...
Signed-off-by: Author <author@mail>
---
V2 -> V3: Removed redundant helper function
V1 -> V2: Cleaned up coding style and addressed review comments

path/to/file | 5+++--
...
```

See more details on the proper patch format in the following references.

### Backtraces in commit mesages

Backtraces help document the call chain leading to a problem. However, not all
backtraces are helpful. For example, early boot call chains are unique and obvious.
Copying the full dmesg output verbatim, however, adds distracting information
like timestamps, module lists, register and stack dumps.

Therefore, the most useful backtraces should distill the relevant information from the
dump, which makes it easier to focus on the real issue.

## Explicit In-Reply-To headers

It can be helpful to manually add In-Reply-To: headers to a patch to associate
the patch with previous relevant discussion, e.g. to link a bug fix with the
bug report. However, for a multi-patch series, it is generally best to avoid
using In-Reply-To: to link to older versions of the series. This way multiple
versions of the patch don't become an unmanageable forest of references.
