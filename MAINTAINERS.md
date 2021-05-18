# How to submit changes

Please try to follow the guidelines below. This will make things
easier on the maintainers. Not all of these guidelines matter for every
trivial patch so apply some common sense.

Tips for patch submitters:

1. Always test your changes, however small, on at least 2 or 3 people, preferably many more.

2. Try to release a few alpha test versions first.
  Announce them onto the <a href="" target="_blank">#alpha-tests</a> channel and await results.

3. Make sure your changes compile correctly in multiple configurations.
  In particular, check that changes are both responsive and functional.

4. When you are happy with a change make a pull request and await feedback.

5. Make a patch available to the relevant maintainer in the list.
  Be prepared to get your changes sent back with seemingly silly requests about formatting and naming strategies.
  These aren't as silly as they seem. One job the maintainers (and especially Michael) do is to keep things looking the same. Sometimes this means that the clever hack in your code to get around a problem
  actually needs to become a generalized feature ready for next time.

NOTE:
Try to include any credit lines you want added with the patch.
It avoids people being missed off by mistake.

Document known bugs. If it doesn't work for everything
or it does something very odd once a month, document it by leaving a comment under the pull request.

Remember that submissions must be made under our
<a href="https://cmihai99.github.io/andro/legal/terms-of-use.html" target="_blank">terms and regulations</a>
and should include a ``Signed-off-by:`` line.

<br>

# Descriptions of section entries and preferred order

- M: Mail: FullName <address@domain>

- R: Reviewer: FullName <address@domain>

- L: List: Mailing list that is relevant to this area

- S: Status: One of the following:  
  Supported:	Someone is actually paid to look after this.  
  Maintained:	Someone actually looks after it.  
  Odd Fixes:	It has a maintainer but they don't have time to do much other than throw the odd patch in.  
  Orphan:	    No current maintainer [but maybe you could take the role as you write your new code].  
  Obsolete:	  Old code. Something tagged obsolete generally means it has been replaced by a better version.

- W: Web-page: Website URL with the page changes

- C: Credit: Anyone wanted to be credited with the patch

- F: Files: Files and directories wildcard patterns.
  A trailing slash includes all files and subdirectory files

- X: Excluded: Excluded files and directories that are not maintained, same rules as Files:.  
  Files exclusions are tested before file matches. Can be useful for excluding a specific subdirectory.

<br>

# Project maintainers

NOTE: When reading this list, please look for the most precise areas first. When adding to this list, please keep the entries in alphabetical order.

<br>

BROWSER SUPPORT
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-compatibility@gmail.com  
S: Supported  

BUG FIXING  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-git@gmail.com  
S: Supported  
W: https://github.com/CMihai99/andro/issues?q=label%3Afeature  

CODE ANALYTICS  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-code@gmail.com  
S: Supported  

CODE REFACTORING  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-code@gmail.com  
S: Supported  

CONTACT MANAGEMENT  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
M: Bencu Bogdan <bogybusiness@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Bencu Bogdan <bogybusiness@gmail.com>  
L: andro-contact@gmail.com  
S: Supported  

CONTRIBUTION MANAGEMENT  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-contributions@gmail.com  
S: Supported  

COPYRIGHTING LAWS  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
M: Bencu Bogdan <bogybusiness@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Bencu Bogdan <bogybusiness@gmail.com>  
L: andro-legal@gmail.com  
S: Supported  
W: https://cmihai99.github.io/andro/legal/copyright.html

CSS CODE REVIEW  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-code@gmail.com  
S: Supported  

DEVICE COMPATIBILITY 
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-compatibility@gmail.com  
S: Supported  

DISCORD SERVER  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
M: Bencu Bogdan <bogybusiness@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Bencu Bogdan <bogybusiness@gmail.com>  
L: andro-contact@gmail.com  
S: Supported  
W: https://discord.gg/uWfWDkcF  

DOCUMENTATION  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
M: Bencu Bogdan <bogybusiness@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-docs@gmail.com  
S: Supported  
W: https://cmihai99.github.io/andro/docs  
F: docs/  

FEATURE IMPLEMENTATION  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-git@gmail.com  
S: Supported  
W: https://github.com/CMihai99/andro/issues?q=label%3Afeature  

GIT COMMITS  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-git@gmail.com  
S: Supported  

HTML CODE REVIEW  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-code@gmail.com  
S: Supported  

INSTAGRAM ACCOUNT  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
M: Bencu Bogdan <bogybusiness@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-contact@gmail.com  
S: Supported  

JAVASCRIPT CODE REVIEW  
L: andro-code@gmail.com  
S: Orphan  

LEGAL INFORMATION  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-legal@gmail.com  
S: Supported  
W: https://cmihai99.github.io/andro/legal  
F: legal/  

LICENSING  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-legal@gmail.com  
S: Supported  

PROFIT MANAGEMENT  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
M: Bencu Bogdan <bogybusiness@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-contact@gmail.com  
S: Supported  

PULL REQUEST REVIEW  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
M: Bencu Bogdan <bogybusiness@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-git@gmail.com  
S: Supported  

SCSS CODE REVIEW  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-code@gmail.com  
S: Supported  

TWITTER ACCOUNT  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
M: Bencu Bogdan <bogybusiness@gmail.com>  
R: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-contact@gmail.com  
S: Supported  

TYPESCRIPT CODE REVIEW  
L: andro-code@gmail.com  
S: Orphan  