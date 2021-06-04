<!-- SPDX-License-Identifier: MIT -->

# Getting Started with Fyndro Development

So you want to be a Fyndro developer? Welcome! While there is a lot to be learned about Fyndro in a
technical sense, this document's goal is to teach you everything you need to know to achieve this by
describing the process you need to go through, and hints on how to work with the community. It will also
try to explain some of the reasons why the community works like it does, and how to setup development.

## Introduction

Fyndro is written using HTML, the SASS preprocessor, Vuejs, and TypeScript.
A good understanding of HTML, SASS, and Vuejs is required for development.
TypeScript is not required unless you plan to do back-end work.

Please remember that you are trying to learn how to setup development,
as well as work with the existing development community. It is a diverse
group of people, with high standards for style and procedure. These standards
have been created over time based on what they have found to work best for such team.
Try to learn as much as possible about these standards ahead of time, as they
are well documented; do not expect people to adapt to your way of doing things.

## Software requirements

1.  Operating system:
    The supported operating system for developing Fyndro is currently only Windows.
    macOS is not currently supported as a development operating system.
    Linux support is, altough, coming in the following months.

2.  Disk space:
    Make sure that you have enough available disk space before starting.
    The source code, including full git history, requires about 2.5 MB.

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
    the only repository inside the `fyndro-project`directory. Otherwise,
    `update-checkout` may not clone the necessary dependencies.

## Installing full sources

When installing full sources, also known as stable releases, put the archive in a
directory where you have permissions and unpack it either manually, or by using Windows Powershell v5.0 and up:

```powershell
Expand-Archive -Force v1.x.zip; cd v1.x/v1.x
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

## Installing dependencies

### Windows

### macOS

⚠️ Since version 0.2.14, `sccache` no longer caches compile commands issued by `build-script` because of [sccache PR 898](https://github.com/mozilla/sccache/pull/898), since `build-script` adds the `-arch x86_64` argument twice. The instructions below may install `sccache` 0.2.14 or newer. You may want to instead download and install an older release from their [Releases page](https://github.com/mozilla/sccache/releases) until this issue is resolved.

1. Install [Xcode 12.3][Xcode] or newer:
   The required version of Xcode changes frequently and is often a beta release.
   Check this document or the host information on <https://ci.swift.org> for the
   current required version.
2. Install [CMake][], [Ninja][] and [Sccache][]:
   - Via [Homebrew][] (recommended):
     ```sh
     brew install cmake ninja sccache
     ```
   - Via [Homebrew Bundle][]:
     ```sh
     brew bundle
     ```

[Xcode]: https://developer.apple.com/xcode/resources/
[CMake]: https://cmake.org
[Ninja]: https://ninja-build.org
[Sccache]: https://github.com/mozilla/sccache
[Homebrew]: https://brew.sh/
[Homebrew Bundle]: https://github.com/Homebrew/homebrew-bundle

### Ubuntu Linux

1. For Ubuntu 16.04 LTS and 18.04 LTS, run the following:

   ```sh
   sudo apt-get install    \
     clang                 \
     cmake                 \
     git                   \
     icu-devtools          \
     libcurl4-openssl-dev  \
     libedit-dev           \
     libicu-dev            \
     libncurses5-dev       \
     libpython3-dev        \
     libsqlite3-dev        \
     libxml2-dev           \
     ninja-build           \
     pkg-config            \
     python                \
     python-six            \
     rsync                 \
     swig                  \
     systemtap-sdt-dev     \
     tzdata                \
     uuid-dev
   sudo snap install sccache --candidate --classic
   ```

   **Note:** LLDB currently requires at least `swig-1.3.40` but will
   successfully build with version 2 shipped with Ubuntu.

## Building the project for the first time

1. On Windows, IDEs (Visual Studio Code resp.) serve as an
   easy way to install development dependencies such as a C++ compiler,
   a linker, header files, etc. The IDE's build system need not be used to
   build Swift. On Linux, these dependencies are installed by the
   distribution's package manager.
2. CMake is a cross-platform build system for C and C++.
   It forms the core infrastructure used to _configure_ builds of
   Swift and its companion projects.
3. Ninja is a low-level build system that can be used to _build_ the project,
   as an alternative to Xcode's build system. Ninja is somewhat faster,
   especially for incremental builds, and supports more build environments.
4. Sccache is a caching tool:
   If you ever delete your build directory and rebuild from scratch
   (i.e. do a "clean build"), Sccache can accelerate the new build
   significantly. There are few things more satisfying than seeing Sccache
   cut through build times.
5. `utils/update-checkout` is a script to help you work with all the individual
   git repositories together, instead of manually cloning/updating each one.
6. `utils/build-script` (we will introduce this shortly)
   is a high-level automation script that handles configuration (via CMake),
   building (via Ninja or Xcode), caching (via Sccache), running tests and more.

> **Pro Tip**: Most tools support `--help` flags describing the options they
> support. Additionally, both Clang and the Swift compiler have hidden flags
> (`clang --help-hidden`/`swiftc --help-hidden`) and frontend flags
> (`clang -cc1 --help`/`swiftc -frontend --help`) and the Swift compiler
> even has hidden frontend flags (`swiftc -frontend --help-hidden`). Sneaky!

Phew, that's a lot to digest! Now let's proceed to the actual build itself!

### The actual build

1. Make sure you have Sccache running.
   ```sh
   sccache --start-server
   ```
   (Optional) Sccache defaults to a cache size of 10GB, which is relatively
   small compared to build artifacts. You can bump it up, say by setting
   `export SCCACHE_CACHE_SIZE="50G"` in your dotfile(s). For more details,
   see the [Sccache README][Sccache].
2. Decide if you would like to build the toolchain using Ninja or using Xcode.
   - If you use an editor other than Xcode and/or you want somewhat faster builds,
     go with Ninja.
   - If you are comfortable with using Xcode and would prefer to use it,
     go with Xcode.
   There is also a third option, which is somewhat more involved:
   [using both Ninja and Xcode](#using-both-ninja-and-xcode).
3. Build the toolchain with optimizations, debuginfo, and assertions and run
   the tests.
   - Via Ninja:
     ```sh
     utils/build-script --skip-build-benchmarks \
       --skip-ios --skip-watchos --skip-tvos --swift-darwin-supported-archs "$(uname -m)" \
       --sccache --release-debuginfo --swift-disable-dead-stripping --test
     ```
   - Via Xcode:
     ```sh
     utils/build-script --skip-build-benchmarks \
       --skip-ios --skip-watchos --skip-tvos --swift-darwin-supported-archs "$(uname -m)" \
       --sccache --release-debuginfo --swift-disable-dead-stripping --test \
       --xcode
     ```
   This will create a directory
   `swift-project/build/Ninja-RelWithDebInfoAssert`
   (with `Xcode` instead of `Ninja` if you used `--xcode`)
   containing the build artifacts.
   - If the build succeeds: Once the build is complete, the tests will run.
     - If the tests are passing: Great! We can go to the next step.
     - If some tests are failing:
       - Consider [filing a bug report](https://swift.org/contributing/#reporting-bugs).
       - Note down which tests are failing as a baseline. This baseline will be
         handy later when you run the tests after making a change.
   - If the build fails:
     See [Troubleshooting build issues](#troubleshooting-build-issues).

In the following sections, for simplicity, we will assume that you are using a
`Ninja-RelWithDebInfoAssert` build on macOS running on an Intel-based Mac,
unless explicitly mentioned otherwise. You will need to slightly tweak the paths
for other build configurations.

#### Using both Ninja and Xcode

Some contributors find it more convenient to use both Ninja and Xcode.
Typically this configuration consists of:

1. A Ninja build created with `--release-debuginfo`.
2. An Xcode build created with `--release-debuginfo --debug-swift`.

The Ninja build can be used for fast incremental compilation and running tests
quickly. The Xcode build can be used for debugging with high fidelity.

The additional flexibility comes with two issues: (1) consuming much more disk
space and (2) you need to maintain the two builds in sync, which needs extra
care when moving across branches.

### Troubleshooting build issues

- Double-check that all projects are checked out at the right branches.
  A common failure mode is using `git checkout` to change the branch only
  for `swift` (often to a release branch), leading to an unsupported
  configuration. See Step 4 of [Cloning the Project](#cloning-the-project)
  on how to fix this.
- Double-check that all your dependencies
  [meet the minimum required versions](#spot-check-dependencies).
- Check if there are spaces in the paths being used by `build-script` in
  the log. While `build-script` should work with paths containing spaces,
  sometimes bugs do slip through, such as
  [SR-13441](https://bugs.swift.org/browse/SR-13441).
  If this is the case, please [file a bug report][Swift JIRA] and change the path
  to work around it.
- Check that your `build-script` invocation doesn't have typos. You can compare
  the flags you passed against the supported flags listed by
  `utils/build-script --help`.
- Check the error logs and see if there is something you can fix.
  In many situations, there are several errors, so scrolling further back
  and looking at the first error may be more helpful than simply looking
  at the last error.
- Check if others have encountered the same issue on the Swift forums or on
  [Swift JIRA][].
- Create a new Swift forums thread in the Development category. Include
  information about your configuration and the errors you are seeing.
  - You can [create a gist](https://gist.github.com) with the entire build
    output and link it, while highlighting the most important part of the
    build log in the post.
  - Include the output of `utils/update-checkout --dump-hashes`.

[Swift JIRA]: https://bugs.swift.org

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

### Editing code

#### Setting up your fork

If you are building the toolchain for development and submitting patches,
you will need to setup a GitHub fork.

First fork the `apple/swift` [repository](https://github.com/apple/swift.git),
using the "Fork" button in the web UI, near the top-right. This will create a
repository `username/swift` for your GitHub username. Next, add it as a remote:
```sh
# Using 'my-remote' as a placeholder name.

# If you set up SSH in step 2
git remote add my-remote git@github.com:username/swift.git

# If you used HTTPS in step 2
git remote add my-remote https://github.com/username/swift.git
```
Finally, create a new branch.
```sh
# Using 'my-branch' as a placeholder name
git checkout -b my-branch
git push --set-upstream my-remote my-branch
```

#### First time Xcode setup

If you used `--xcode` earlier, you will see an Xcode project generated under
`../build/Xcode-RelWithDebInfoAssert/swift-macosx-x86_64` (or
`../build/Xcode-RelWithDebInfoAssert/swift-macosx-arm64` on Apple Silicon Macs). When you open the
project, Xcode might helpfully suggest "Automatically Create Schemes". Most of
those schemes are not required in day-to-day work, so you can instead manually
select the following schemes:
- `swift-frontend`: If you will be working on the compiler.
- `check-swift-all`: This can be used to run the tests. The test runner does
  not integrate with Xcode though, so it may be easier to run tests directly
  on the commandline for more fine-grained control over which exact tests are
  run.
<!-- TODO: Insert SourceKit/stdlib specific instructions? -->

#### Editing

Make changes to the code as appropriate. Implement a shiny new feature!
Or fix a nasty bug! Update the documentation as you go! <!-- please 🙏 -->
The codebase is your oyster!

:construction::construction_worker::building_construction:

Now that you have made some changes, you will need to rebuild...

#### Incremental builds with Ninja

To rebuild the compiler:
```sh
ninja -C ../build/Ninja-RelWithDebInfoAssert/swift-macosx-$(uname -m) swift-frontend
```

To rebuild everything, including the standard library:
```sh
ninja -C ../build/Ninja-RelWithDebInfoAssert/swift-macosx-$(uname -m)
```

#### Incremental builds with Xcode

Rebuilding works the same way as with any other Xcode project; you can use
<kbd>⌘</kbd>+<kbd>B</kbd> or Product → Build.

#### Spot checking an incremental build

As a quick test, go to `lib/Basic/Version.cpp` and tweak the version
printing code slightly. Next, do an incremental build as above. This incremental
build should be much faster than the from-scratch build at the beginning.
Now check if the version string has been updated:

```sh
../build/Ninja-RelWithDebInfoAssert/swift-macosx-$(uname -m)/bin/swift-frontend --version
```

This should print your updated version string.

### Reproducing an issue

Starter bugs typically have small code examples that fit within a single file.
You can reproduce such an issue in various ways, such as compiling it from the
commandline using `/path/to/swiftc MyFile.swift`, pasting the code into
[Compiler Explorer][] (aka godbolt) or using an Xcode Playground.

[Compiler Explorer]: https://godbolt.org

For files using frameworks from an SDK bundled with Xcode, you need the pass
the SDK explicitly. Here are a couple of examples:
```sh
# Compile a file to an executable for your local machine.
xcrun -sdk macosx /path/to/swiftc MyFile.swift

# Say you are trying to compile a file importing an iOS-only framework.
xcrun -sdk iphoneos /path/to/swiftc -target arm64-apple-ios13.0 MyFile.swift
```
You can see the full list of `-sdk` options using `xcodebuild -showsdks`,
and check some potential `-target` options for different operating systems by
skimming the compiler's test suite under `test/`.

Sometimes bug reports come with SwiftPM packages or Xcode projects as minimal
reproducers. While we do not add packages or projects to the compiler's test
suite, it is generally helpful to first reproduce the issue in context before
trying to create a minimal self-contained test case. If that's the case with
the bug you're working on, check out our
[instructions on building packages and Xcode projects with a locally built compiler](/docs/HowToGuides/FAQ.md#how-do-i-use-a-locally-built-compiler-to-build-x).

### Running tests

There are two main ways to run tests:

1. `utils/run-test`: By default, `run-test` builds the tests' dependencies
   before running them.
   ```sh
   # Rebuild all test dependencies and run all tests under test/.
   utils/run-test --lit ../llvm-project/llvm/utils/lit/lit.py \
     ../build/Ninja-RelWithDebInfoAssert/swift-macosx-$(uname -m)/test-macosx-$(uname -m)

   # Rebuild all test dependencies and run tests containing "MyTest".
   utils/run-test --lit ../llvm-project/llvm/utils/lit/lit.py \
     ../build/Ninja-RelWithDebInfoAssert/swift-macosx-$(uname -m)/test-macosx-$(uname -m) \
     --filter="MyTest"
   ```
2. `lit.py`: lit doesn't know anything about dependencies. It just runs tests.
   ```sh
   # Run all tests under test/.
   ../llvm-project/llvm/utils/lit/lit.py -s -vv \
     ../build/Ninja-RelWithDebInfoAssert/swift-macosx-$(uname -m)/test-macosx-$(uname -m)

   # Run tests containing "MyTest"
   ../llvm-project/llvm/utils/lit/lit.py -s -vv \
     ../build/Ninja-RelWithDebInfoAssert/swift-macosx-$(uname -m)/test-macosx-$(uname -m) \
     --filter="MyTest"
   ```
   The `-s` and `-vv` flags print a progress bar and the executed commands
   respectively.

If you making small changes to the compiler or some other component, you'll
likely want to [incrementally rebuild](#editing-code) only the relevant
Ninja/Xcode target and use `lit.py` with `--filter`. One potential failure
mode with this approach is accidental use of stale binaries. For example, say
that you want to rerun a SourceKit test but you only incrementally rebuilt the
compiler. Then your changes will not be reflected when the test runs because the
`sourcekitd` binary was not rebuilt. Using `run-test` instead is the safer
option, but it will lead to a longer feedback loop due to more things getting
rebuilt.

If you want to rerun all the tests, you can either rebuild the whole project
and use `lit.py` without `--filter` or use `run-test` to handle both aspects.

Recall the baseline failures mentioned in
[the build section](#the-actual-build). If your baseline had failing tests, make
sure you compare the failures seen after your changes to the baseline. If some
test failures look totally unrelated to your changes, there is a good chance
that they were already failing as part of the baseline.

For more details on running tests and understanding the various Swift-specific
lit customizations, see [Testing.md](/docs/Testing.md). Also check out the
[lit documentation](https://llvm.org/docs/CommandGuide/lit.html) to understand
how the different lit commands work.

### Debugging issues

In this section, we briefly describe two common ways of debugging: print
debugging and using LLDB.

Depending on the code you're interested in, LLDB may be significantly more
effective when using a debug build. Depending on what components you are
working on, you could turn off optimizations for only a few things.
Here are some example invocations:

```sh
# optimized Stdlib + debug Swiftc + optimized Clang/LLVM
utils/build-script --release-debuginfo --debug-swift # other flags...

# debug Stdlib + optimized Swiftc + optimized Clang/LLVM
utils/build-script --release-debuginfo --debug-swift-stdlib # other flags...

# optimized Stdlib + debug Swiftc (except typechecker) + optimized Clang/LLVM
utils/build-script --release-debuginfo --debug-swift --force-optimized-typechecker

# Last resort option, it is highly unlikely that you will need this
# debug Stdlib + debug Swiftc + debug Clang/LLVM
utils/build-script --debug # other flags...
```

Debug builds have two major drawbacks:
- A debug compiler is much slower, leading to longer feedback loops in case you
  need to repeatedly compile the Swift standard library and/or run a large
  number of tests.
- The build artifacts consume a lot more disk space.

[DebuggingTheCompiler.md](/docs/DebuggingTheCompiler.md) goes into a LOT
more detail on how you can level up your debugging skills! Make sure you check
it out in case you're trying to debug a tricky issue and aren't sure how to
go about it.

#### Print debugging

A large number of types have `dump(..)`/`print(..)` methods which can be used
along with `llvm::errs()` or other LLVM streams. For example, if you have a
variable `std::vector<CanType> canTypes` that you want to print, you could do:
```cpp
auto &e = llvm::errs();
e << "canTypes = [";
llvm::interleaveComma(canTypes, e, [&](auto ty) { ty.dump(e); });
e << "]\n";
```
You can also crash the compiler using `assert`/`llvm_unreachable`/
`llvm::report_fatal_error`, after accumulating the result in a stream:
```cpp
std::string msg; llvm::raw_string_ostream os(msg);
os << "unexpected canTypes = [";
llvm::interleaveComma(canTypes, os, [&](auto ty) { ty.dump(os); });
os << "] !!!\n";
llvm::report_fatal_error(os.str());
```

#### Debugging using LLDB

When the compiler crashes, the commandline arguments passed to it will be
printed to stderr. It will likely look something like:

```
/path/to/swift-frontend <args>
```

- Using LLDB on the commandline: Copy the entire invocation and pass it to LLDB.
  ```sh
  lldb -- /path/to/swift-frontend <args>
  ```
  Now you can use the usual LLDB commands like `run`, `breakpoint set` and so
  on. If you are new to LLDB, check out the [official LLDB documentation][] and
  [nesono's LLDB cheat sheet][].
- Using LLDB within Xcode:
  Select the current scheme 'swift-frontend' → Edit Scheme → Run phase →
  Arguments tab. Under "Arguments Passed on Launch", copy-paste the `<args>`
  and make sure that "Expand Variables Based On" is set to swift-frontend.
  Close the scheme editor. If you now run the compiler
  (<kbd>⌘</kbd>+<kbd>R</kbd> or Product → Run), you will be able to use the
  Xcode debugger.

  Xcode also has the ability to attach to and debug Swift processes launched
  elsewhere. Under Debug → Attach to Process by PID or name..., you can enter
  a compiler process's PID or name (`swift-frontend`) to debug a compiler
  instance invoked elsewhere. This can be helpful if you have a single compiler
  process being invoked by another tool, such as SwiftPM or another open Xcode
  project.

  > **Pro Tip**: Xcode 12's terminal does not support colors, so you may see
  > explicit color codes printed by `dump()` methods on various types. To avoid
  > color codes in dumped output, run `expr llvm::errs().enable_color(false)`.

[official LLDB documentation]: https://lldb.llvm.org
[nesono's LLDB cheat sheet]: https://www.nesono.com/sites/default/files/lldb%20cheat%20sheet.pdf

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

-   [maintaining/SubmittingPatches.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/how-to/maintaining/SubmittingPatches.md)
    describes in explicit detail how to successfully create and
    send a patch, including how to obtain a current source tree.

-   [SecurityBugs.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/how-to/SecurityBugs.md)
    helps you notify the developers if you feel you have found a security problem, to help solve the issue.

-   [maintaining/ManagementStyle.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/how-to/maintaining/ManagementStyle.md)
    describes how Fyndro maintainers operate and the shared ethos behind their methodologies.
    This is important reading for anyone new to development (or anyone simply curious about it),
    as it resolves a lot of common misconceptions and confusion about the unique behavior of maintainers.

-   [/references/StableRules.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/references/StableRules.md)
    describes the rules on how the stable releases happen, and what
    to do if you want to get a change into one of these releases.

---

All of these things are sometimes very hard to do. It can take years to perfect these practices
(if at all). It's a continuous process of improvement that requires a lot of patience and determination.
But don't give up, it's possible.

If you see mistakes in the documentation (including typos, not just major errors) or identify gaps
that you could potentially improve the contributing experience, submit a pull request or file a bug report.
