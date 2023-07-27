#!/bin/bash

if [ -d "/home/coder/project/workspace/angularapp" ]
then
    echo "project folder present"
    cp /home/coder/project/workspace/karma/karma.conf.js /home/coder/project/workspace/angularapp/karma.conf.js;

    # checking for login component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/auth/login" ]
    then
        cp /home/coder/project/workspace/karma/login.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/auth/login/login.component.spec.ts;
    else
        echo "FE_loginTest FAILED";
    fi 

    # checking for signup component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/auth/signup" ]
    then
        cp /home/coder/project/workspace/karma/signup.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/auth/signup/signup.component.spec.ts;
    else
        echo "FE_signupTest FAILED";
    fi 

    # checking for courses component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/courses" ]
    then
        cp /home/coder/project/workspace/karma/courses.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/courses/courses.component.spec.ts;
    else
        echo "FE_coursesTest FAILED";
    fi 

     # checking for institutes component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/institutes" ]
    then
        cp /home/coder/project/workspace/karma/institutes.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/institutes/institutes.component.spec.ts;
    else
        echo "FE_institutesTest FAILED";
    fi



    # checking for adminreview component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/adminreview" ]
    then
        cp /home/coder/project/workspace/karma/adminreview.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/adminreview/adminreview.component.spec.ts;
    else
        echo "FE_adminReviewTest FAILED";
    fi

    
    # checking for admissionform component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/userside/admissionform" ]
    then
        cp /home/coder/project/workspace/karma/admissionform.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/userside/admissionform/admissionform.component.spec.ts;
    else
        echo "FE_admissionFormTest FAILED";
    fi 

    # checking for userhomepage component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/userside/userhomepage" ]
    then
        cp /home/coder/project/workspace/karma/userhomepage.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/userside/userhomepage/userhomepage.component.spec.ts;
    else
        echo "FE_userHomePageTest FAILED";
    fi 

    # checking for userreview component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/userside/userreview" ]
    then
        cp /home/coder/project/workspace/karma/userreview.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/userside/userreview/userreview.component.spec.ts;
    else
        echo "FE_userReviewTest FAILED";
    fi 

    cd /home/coder/project/workspace/angularapp/;
    npm test;
else   
    echo "FE_loginTest FAILED";
    echo "FE_signupTest FAILED";
    echo "FE_coursesTest FAILED";
    echo "FE_institutesTest FAILED";
    echo "FE_adminReviewTest FAILED";
    echo "FE_admissionFormTest FAILED";
    echo "FE_userHomePageTest";
    echo "FE_userReviewTest FAILED";
fi

