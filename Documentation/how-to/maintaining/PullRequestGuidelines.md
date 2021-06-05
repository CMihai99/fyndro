<!--
===--------------------------------------------------------------------------===
Copyright (c) 2021 Fyndro
Licensed under MIT

See https://github.com/CMihai99/fyndro/blob/main/COPYING for license information
See https://github.com/CMihai99/fyndro/tree/main/LICENSES for a list of licenses
===--------------------------------------------------------------------------===
-->

# Pull Request Guidelines

We aim to review pull requests within three days. If it has been over
three days and you have not received any feedback, feel free to contact us.

Not all of these guidelines matter for every pull-request so apply common sense.

## Making a branch

Please create a separate branch for each issue that you're working on.

When pushing, commit to the `experimental` branch. Do not make changes to the `main` branch.

The `experimental` branch is only used for experimental changes which will be reviewed for approval.
The `main` branch is only used for approved changes which will make it into the next version.

## Pushing your code

Push your code and make a pull request as soon as you can. 1Mark the title with "[WIP]" if its still being edited.

## Describing your pull request

Populate the stencil completely for maximum verbosity.
Tag the actual issue number by using #issue_number (e.g. #42).

-   This closes the issue when your PR is merged.
    Tag the actual issue author by using @author (e.g. @CMihai99).

-   This brings the reporter of the issue into the conversation.
    Mark the tasks off your checklist by adding an x in [] (e.g. [x]).

    -   This checks off the boxes in your to-do list. The more boxes you check, the better.

-   Describe your change in detail. Too much detail is better than too little.

-   Describe how you tested your change.

-   Describe the validation and testing steps.

-   Check the Preview tab to make sure the Markdown is correctly rendered
    and that all tags and references are linked.

## Requesting review

Once your PR is ready, remove "[WIP]" from the title and/or change it from a draft PR to a regular PR.

If a specific reviewer is not assigned automatically, please request a review from one of the maintainers.

## Incorporating feedback

If your PR gets a 'Changes requested' review, you will need to address the feedback
and update your PR by pushing to the same branch. You don't need to close the PR and open a new one.

Be sure to re-request review once you have made changes after a code review.

Asking for a re-review makes it clear that you addressed the changes that were requested
and that it's waiting for the maintainers' response instead of the other way round.