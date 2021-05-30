<!-- SPDX-License-Identifier: MIT -->

# Commit Message Template

Quality commit messages help maintainers understand
the patch you fixed or feature you added. 

A good commit message looks like this:

```console
Header line: explain the commit in one line (use the imperative form)

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc.

The body of the commit message can be several paragraphs, and please
do proper word-wrap and keep columns shorter than about 74 characters or so.
That way "git log" will show things nicely even when it's indented.

Make sure you explain your solution and why you're doing what you're
doing, as opposed to describing what you're doing. Reviewers and your
future self can read the patch, but might not understand why a
particular solution was implemented.

Reported-by: whoever-reported-it
Signed-off-by: Your Name <youremail@yourhost.com>
```

Note: The header line really should be meaningful, and really should be
just one line.  That header line is what is shown by tools like gitk and
shortlog, and should summarize the change in one readable line of text,
independently of the longer explanation. Please use verbs in the
imperative in the commit message, as in "Fix bug that ...", "Add
file/feature ...", etc.