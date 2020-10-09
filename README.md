**COMP 3123 --Test -- 1 (8%)**

**Developer Note:\
**When working on your questions, please create separate folder for your
work.  This way you won't putting all your code in the same file, which
can pollute the global name space.  In short, it will prevent you from
overwriting your own work and causing your code to compile incorrectly.

[Organize your folder structure in this way.]

![](.//media/image1.png)

**Lab Test Reference**

You may use the Javascript ES6 and node.js online documentation\
[[https://developer.mozilla.org/en-US/docs/Web/JavaScript]](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[[https://nodejs.org/en/docs/]](https://nodejs.org/en/docs/)

**Lab Test Submission**

Create a git repo name studentid\_**comp3123\_test1** on GitHub

Please submit the ZIP of test project and GitHub report link at the end
of the lab

**Question 1: ES6 Features**

-   Create a script with a function named ***lowerCaseWords*** that
    takes a mixed array as input.

The function will do the following.

-   return a promise that is resolved or rejected

-   filter the non-strings and lower case the remaining words

<!-- -->

-   Input

![](.//media/image2.png)

-   Output

![](.//media/image3.png)

**[Question 2: Promises]**

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

![](.//media/image4.png)

-   Output\
    ![](.//media/image5.png)

**[Question 3: File Module]**

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
        script.]

> **\> Output**
>
> ![](.//media/image6.png)
>
> ![](.//media/image7.png)
