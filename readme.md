# Poll Voting Component

A simple poll voting component created using HTML, JavaScript, and Bootstrap. This mini-project allows users to vote for their favorite JavaScript framework from a list of options, and displays the results dynamically.

## Features

- User-friendly interface for selecting a voting option.
- Dynamic display of poll results.
- Uses Bootstrap for styling.
- Disables voting options after submission to prevent multiple votes.

## Purpose

This is a practice-based mini-project intended to improve JavaScript skills, particularly in using the `Map` object for efficient data handling.

## Installation

**Install Bootstrap through npm:**
```sh
   npm install Bootstrap@5.3.3
```

## Why Map?

The Map object is used in this project to store the poll options and their corresponding vote counts. It provides several advantages:

- Order Preservation: Map maintains the order of entries, making it easy to display poll results in the order they were added.

- Key-Value Pairs: Map allows storing key-value pairs, making it simple to update vote counts for each poll option.

- Iteration: Map provides convenient methods for iterating over entries, which is useful for dynamically displaying the results.
