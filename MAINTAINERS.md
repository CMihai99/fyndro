# Submitting changes

Please try to follow the guidelines below. This will make things easier on the maintainers.
Not all of these guidelines matter for every trivial patch so apply some common sense.

1. Always test your changes, however small, on at least 2 people, preferably more.

1. Try to release a few alpha test versions first.
  Announce them onto the <a href="https://discord.gg/XMG9wxg5" target="_blank">#alpha-tests</a> channel and await results.

1. Make sure your changes compile correctly in multiple configurations.
  In particular, check that changes are both responsive and functional.

1. When you are happy with a change, make a pull request and await feedback.

1. Make a patch available to the relevant maintainer in the list.
  Be prepared to get your changes sent back with seemingly silly requests about formatting and naming.
  These aren't as silly as they seem. One job the maintainers (and especially Michael) do is keep things looking the same. Sometimes this means that the clever hack in your code to get around a problem
  actually needs to become a generalized feature ready for next time.

NOTE:  
- Try to include any credit lines you want added with the patch.
  It avoids people being missed off by mistake.  
- Document known bugs.
  If it doesn't work for everything or it does something very odd once a month,
  document it by leaving a comment under the specific commit or pull request.
- When adding to the maintainers list, please keep the entries in alphabetical order.

<br>

# Entry descriptions

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

# Maintainers list

<br>

BROWSER SUPPORT  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-compatibility@gmail.com  
S: Maintained

DEVICE COMPATIBILITY  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-compatibility@gmail.com  
S: Orphan

DOCUMENTATION  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
L: andro-docs@gmail.com  
S: Maintained  
W: https://cmihai99.github.io/andro/docs  
C: Bencu Bogdan <bogybusiness@gmail.com>  
F: docs/  
F: legal/

MONGODB SERVER  
M: Tomek Pulkiewicz <tomek@pulkiewicz.com>  
R: Tomek Pulkiewicz <tomek@pulkiewicz.com>    
L: andro-compatibility@gmail.com  
S: Maintained  
C: Calinescu Mihai <mihaimihaia431@gmail.com>  
F: mongodb/

VUE.JS  
M: Calinescu Mihai <mihaimihaia431@gmail.com>  
M: Tomek Pulkiewicz <tomek@pulkiewicz.com>  
L: andro-code@gmail.com  
S: Maintained  
F: js/
F: ts/