<!-- SPDX-License-Identifier: MIT -->

# Maintainers

## Submitting changes

Please try to follow the guidelines below. This will make things easier on the maintainers.
Not all of these guidelines matter for every trivial patch so apply some common sense.

1.  Always test your changes, however small,
    on at least 2 people, preferably more.

2.  Try to release a few alpha test versions first.
    Announce them onto the [#alpha-testing](https://discord.gg/Hr36hVVV)
    channel and await results.

3.  Make sure your changes compile correctly in multiple configurations.
    In particular, check that changes are both responsive and functional.

4.  When you are happy with a change, make a pull request and await feedback.

5.  Make a patch available to the relevant maintainer in the list.
    Be prepared to get your changes sent back with seemingly silly requests
    about formatting and naming. These aren't as silly as they seem.
    One job the maintainers (and especially Michael) do is keep things looking the same.
    Sometimes this means that the clever hack in your code to get around a problem
    actually needs to become a generalized feature ready for next time.

Note:

-   Try to include any credit lines you want added with the patch.
    It avoids people being missed off by mistake.  

-   Document known bugs.
    If it doesn't work for everything or it does something very odd once a month,
    document it by leaving a comment under the specific commit or pull request.

-   When adding to the maintainers list, please keep the entries in alphabetical order.

## Entry descriptions

-   M: Mail: Full Name <youremail@yourhost.com>
-   R: Reviewer: Full Name <youremail@yourhost.com>
-   L: List: Mailing list that is relevant to this area
-   S: Status: One of the following:
    -   Supported: Someone is actually paid to look after this.
    -   Maintained: Someone actually looks after it.
    -   Odd Fixes: It has a maintainer but they don't have time
        to do much other than throw the odd patch in.
    -   Orphan: No current maintainer (but maybe you could take the role
        as you write your new code).
    -   Obsolete: Old code. Something tagged obsolete generally means
        it has been replaced by a better version.
-   W: Web-page: Website URL with the page changes.
-   C: Credit: Anyone wanted to be credited with the patch.
    Read the [CREDITS](https://github.com/CMihai99/fyndro/blob/main/CREDITS.md)
    file for more information.
-   F: Files: Files and directories wildcard patterns.
    A trailing slash includes all files and subdirectory files.
-   X: Excluded: Excluded files and directories
    that are not maintained, same rules as F.  
    Files exclusions are tested before file matches.
    Can be useful for excluding a specific subdirectory.

## Maintainers list