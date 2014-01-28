'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('CSULA-MOOC-App.services', []).
  value('version', '0.1')
  .factory('stashData', function() {
    // simple json data for week's data
  	var weeks = [
  		{
  			'week' : 'Week-1',
        'startDate': new Date(2014, 0, 6),
        'endDate' : new Date(2014, 0, 9),
        // lesson 1 from udacity
        'homework' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
  			'udacity' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-176475143',
  			'ppt' : 'http://www.calstatela.edu/academic/ecst/cs/cs201/ch01/',
        'quiz': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'lab': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Read Chapter 1',
        'isExpanded': false
  		},
      {
        'week' : 'Week-2',
        'startDate': new Date(2014, 0, 10),
        'endDate' : new Date(2014, 0, 15),
        // lesson 2 from udacity
        'udacity' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-161445800',
        'ppt' : 'http://www.calstatela.edu/academic/ecst/cs/cs201/ch02/',
        'homework' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'quiz': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'lab': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Read Chapter 2',
        'isExpanded': false
      },
      {
        'week' : 'Week-3',
        'startDate': new Date(2014, 0, 16),
        'endDate' : new Date(2014, 0, 22),
        // lesson 3 from udacity
        'udacity' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-183784769',
        'ppt' : 'http://www.calstatela.edu/academic/ecst/cs/cs201/ch03/',
        'homework' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'quiz': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'lab': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Read Chapter 3',
        'isExpanded': false
      },
      {
        'week' : 'Week-4',
        'startDate': new Date(2014, 0, 23),
        'endDate' : new Date(2014, 0, 29),
        // lesson 4 from udacity
        'udacity' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-192345866',
        'ppt' : 'http://www.calstatela.edu/academic/ecst/cs/cs201/ch04/',
        'homework' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'quiz': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'lab': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Read Chapter 4',
        'isExpanded': false
      },
      {
        'week' : 'Week-5',
        'startDate': new Date(2014, 0, 30),
        'endDate' : new Date(2014, 1, 5),
        // lesson 5-1
        'udacity' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-216159736/',
        // lesson 5-2
        'udacity2' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-219235598',
        'ppt' : 'http://www.calstatela.edu/academic/ecst/cs/cs201/ch05/',
        'homework' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'quiz': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'lab': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Read Chapter 5',
        'isExpanded': false
      },
      {
        // yes a midterm here
        'week' : 'Midterm',
        'startDate': new Date(2014, 1, 6),
        'endDate' : new Date(2014, 1, 12),
        'midtermChoice' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'midtermProg' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'testbank': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Read Chapter 1-5',
        'isExpanded': false
      },
      {
        'week' : 'Week-7',
        'startDate': new Date(2014, 1, 13),
        'endDate' : new Date(2014, 1, 19),
        // lesson 6-1
        'udacity' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-218627726',
        'ppt' : 'http://www.calstatela.edu/academic/ecst/cs/cs201/ch06/',
        'homework' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'quiz': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'lab': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Read Chapter 6',
        'isExpanded': false
      },
      {
        'week' : 'Week-8',
        'startDate': new Date(2014, 1, 20),
        'endDate' : new Date(2014, 1, 26),
        // lesson 6-2
        'udacity' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-218843899',
        'ppt' : 'http://www.calstatela.edu/academic/ecst/cs/cs201/ch06/',
        'homework' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'quiz': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'lab': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Read Chapter 6',
        'isExpanded': false
      },
      {
        'week' : 'Week-9',
        'startDate': new Date(2014, 1, 27),
        'endDate' : new Date(2014, 2, 5),
        // lesson 7-1
        'udacity' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-239184981',
        // lesson 7-2
        'udacity2' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-264386417',
        'ppt' : 'http://www.calstatela.edu/academic/ecst/cs/cs201/ch07/',
        'homework' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'quiz': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'lab': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Read Chapter 7',
        'isExpanded': false
      },
      {
        'week' : 'Week-10',
        'startDate': new Date(2014, 2, 6),
        'endDate' : new Date(2014, 2, 12),
        // lesson 7-3
        'udacity' : 'https://www.udacity.com/course/viewer#!/c-cs046/l-264386418',
        'ppt' : 'http://www.calstatela.edu/academic/ecst/cs/cs201/ch07/',
        'homework' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'quiz': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'lab': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Read Chapter 7',
        'isExpanded': false
      },
      {
        'week' : 'Final',
        'startDate': new Date(2014, 2, 13),
        'endDate' : new Date(2014, 2, 19),
        // we will discuss what to put here
        'midtermChoice' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'midtermProg' : 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'testbank': 'http://csns.calstatela.edu/section/taken?quarter=1141',
        'textBook' : 'Review everything (Chapter 1 to 7)',
        'isExpanded': false
      }
  	];

  	return {
  		getWeeks: function() {
  			return weeks;
  		},
  		weeks: weeks
  	};
  });