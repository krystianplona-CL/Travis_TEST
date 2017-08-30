#!/bin/bash

echo "What is Your name?"

read name

echo "Hello $name !"

echo "Your name has ${#name} characters!"

echo "What are you doin?"

read doing

echo "It is great to $doing"

echo "How old are You?"

read age

dateOfBirth=$(expr 2017 - $age)

echo "So, You were born in $dateOfBirth!"

echo "How much do You earn ?"

read money

moneyYear=$(expr $money \* 12)

echo "So, You make $moneyYear every Year!"

if [ $money -gt 5000 ]
    then
        echo "Hey, $money is a pretty good sallary!"
        if [ $money -gt 10000 ]
            then
                echo "You are rich, my friend!"
        fi
    else
        echo "You earn shit :P!"
fi

echo "Choose number from 1-9"

read number

counter=1

if [ $number -le 10 ]
    then
        while [ $counter -le $number ]
            do
                echo "It's coconut number $counter!"
                ((counter++))
            done
                echo "It's a coconut family!!!!"
    else
        echo "Wrong number!"
fi

echo "Thanks! Bye $name!"
