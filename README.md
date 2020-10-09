**COMP 3123 --Test -- 1 (8%)**

**Developer Note:\
**When working on your questions, please create separate folder for your
work.  This way you won't putting all your code in the same file, which
can pollute the global name space.  In short, it will prevent you from
overwriting your own work and causing your code to compile incorrectly.

[Organize your folder structure in this way.]{.underline}

![](.//media/image1.png){width="1.7083333333333333in"
height="0.9791666666666666in"}

**[Lab Test Reference]{.underline}**

You may use the Javascript ES6 and node.js online documentation\
[[https://developer.mozilla.org/en-US/docs/Web/JavaScript]{.underline}](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[[https://nodejs.org/en/docs/]{.underline}](https://nodejs.org/en/docs/)

**[Lab Test Submission]{.underline}**

Create a git repo name studentid\_**comp3123\_test1** on GitHub

Please submit the ZIP of test project and GitHub report link at the end
of the lab

**[Question 1: ES6 Features]{.underline}**

-   Create a script with a function named ***lowerCaseWords*** that
    takes a mixed array as input.

The function will do the following.

-   return a promise that is resolved or rejected

-   filter the non-strings and lower case the remaining words

<!-- -->

-   Input

![](.//media/image2.png){width="4.739583333333333in"
height="0.2708333333333333in"}

-   Output

![](.//media/image3.png){width="1.5729166666666667in"
height="0.28125in"}

**[Question 2: Promises]{.underline}**

-   Given the script file ***callbacks.js***, write a script that does
    the following:

    -   Create a method ***resolvedPromise*** that is similar ***to
        delayedSuccess*** and resolves a message after a timeout of
        500ms.

    -   Create a method ***rejectedPromise*** that is similar to
        ***delayedException*** and rejects an error message after a
        timeout of 500ms.

    -   Call both promises separately and handle the resolved and reject
        results and then output to the console

***callbacks.js***

![](.//media/image4.png){width="4.832743875765529in"
height="3.7343930446194227in"}

-   Output\
    ![](.//media/image5.png){width="2.40625in"
    height="0.4270833333333333in"}

**[Question 3: File Module]{.underline}**

-   Create a script that will do the following:

1.  **Remove Log files**

    -   remove all the files from the Logs directory, if exists

    -   output the file names to delete

    -   remove the Logs directory

2.  **Create Log files**

    -   create a Logs directory, if it does not exist

    -   change the current process to the new Logs directory

    -   create 10 log files and write some text into the file

    -   output the files names to console

    -   **Hint:** use the fs module and path module, and the process
        current working directory to build directory path. [It is
        acceptable, to have a remove.js script and separate add.js
        script.]{.underline}

> **\> Output**
>
> ![](.//media/image6.png){width="1.6145833333333333in"
> height="1.8125in"}
>
> ![](.//media/image7.png){width="2.0416666666666665in"
> height="1.8125in"}
