# Fyndro Release Notes

These are the release notes for Fyndro. Read them carefully,
as they tell you what this is all about, and what to do if something goes wrong.

## What is Fyndro?

Fyndro is a website which categorizes other websites based on traffic, grade,
industry etc. so you can find the perfect tool you need.

## Documentation

-   We recommend looking into the documentation subdirectories for any in-depth information.
    This README is not meant to be documentation on the system: there are much better sources available,
    including [our own](https://github.com/CMihai99/fyndro/tree/main/Documentation).

-   There are various files in the Documentation/ subdirectory:
    these typically contain important notes so please read them.

## Installing the source

When installing the full sources, put the archive in a directory
where you have permissions (e.g. your home directory)
and unpack it manually, or by using Windows Powershell v5.0+:

```powershell
Expand-Archive -Force v1.x.zip; cd v1.x/v1.x
```

Replace "1.x" with the [latest version](https://github.com/CMihai99/fyndro/releases) number.

## Compiling

For help on compiling, read [/process/Compiling.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/Compiling.md)
which goes in detail about the minimum version numbers required for compiling Fyndro.

## Software requirements

Compiling and running the versions require up-to-date software packages.
Read [the software requirements](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/Compiling.md#software-requirements)
for the minimum version numbers required and how to get updates for these packages.
Beware that using excessively old versions of these packages can cause indirect errors
that are very difficult to track down, so please, do not assume that you can
just update packages when obvious problems arise during build or operation.

## If something goes wrong

-   If you have problems that seem to be due to bugs, please check the
    [MAINTAINERS](https://github.com/CMihai99/fyndro/blob/main/MAINTAINERS.md)
    file to see if there is a particular person associated
    with the part that you are having trouble with.
    If there isn't anyone listed there, the second best thing to do
    is to report them on [GitHub Issues](https://github.com/CMihai99/fyndro/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D).
    -   In all bug-reports, please:
        -   tell which version you are talking about
        -   provide steps on how to reproduce the behavior
        -   apply screenshots (if possible)
        -   specify your setup (use common sense)

        In the `Additional context` section, specify if your problem is new or old.
        If you got any error messages related to your problem,
        paste them into the `Error message` section.
