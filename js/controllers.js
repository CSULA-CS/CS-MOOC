'use strict';

/* Controllers */

function MainCtrl($scope, stashData, $location, $timeout) {
	// getting weeks data from the services
	$scope.weeks = stashData.getWeeks();

	$scope.navCollapse = true;

	$scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        readOnly: 'nocursor',
        theme: '3024-night',
        mode: 'text/x-java',
    };
	
	// Used for google chart api
	$scope.chart = {
	  "type": "PieChart",
	  "displayed": true,
	  "data": {
	    "cols": [
	      {
	        "id": "Section",
	        "label": "sect",
	        "type": "string"
	      },
	      {
	        "id": "Percentage",
	        "label": "%",
	        "type": "number"
	      }
	    ],
	    "rows": [
	      {
	        "c": [
	          {
	            "v": "Lab"
	          },
	          {
	            "v": 20,
	            "f": "20 %"
	          }
	        ]
	      },
	      {
	        "c": [
	          {
	            "v": "Attendance"
	          },
	          {
	            "v": 10,
	            "f": "10 %"
	          }
	        ]
	      },
	      {
	        "c": [
	          {
	            "v": "Participation"
	          },
	          {
	            "v": 5,
	            "f": "5 %"
	          }
	        ]
	      },
	      {
	        "c": [
	          {
	            "v": "Projects"
	          },
	          {
	            "v": 10,
	            "f": "10 %"
	          }
	        ]
	      },
	      {
	        "c": [
	          {
	            "v": "Quiz"
	          },
	          {
	            "v": 25,
	            "f": "25 %"
	          }
	        ]
	      },
	      {
	        "c": [
	          {
	            "v": "Midterm"
	          },
	          {
	            "v": 10,
	            "f": "10 %"
	          }
	        ]
	      },
	      {
	        "c": [
	          {
	            "v": "Final"
	          },
	          {
	            "v": 20,
	            "f": "20 %"
	          }
	        ]
	      }
	    ]
	  },
	  "options": {
	    "title": "Grading Policy",
	    "pieSliceText": 'label',
	    "fill": 20,
	    "displayExactValues": true,
	    "vAxis": {
	      "title": "Section",
	      "gridlines": {
	        "count": 10
	      }
	    },
	    "hAxis": {
	      "title": "percentage"
	    },
	    "legend": 'none',
	    "backgroundColor": { "fill": 'transparent' },
	    "titleTextStyle" : { 'color': 'white', 'fontSize': '18' }
	  },
	  "view": {}
	};

	var curDate = new Date();

	for (var i = 0; i < $scope.weeks.length; i ++) {
		if (curDate >= $scope.weeks[i].startDate && curDate <= $scope.weeks[i].endDate) {
			$scope.weeks[i].status = 'current';
			$scope.weeks[i].isExpanded = true;
		} else if (curDate < $scope.weeks[i].startDate) {
			$scope.weeks[i].status = 'future';
		} else {
			$scope.weeks[i].status = 'passed';
		}
	};

	$scope.delAnnouncements = function(index) {
		$scope.announcements.splice(index, 1);
	};

	$scope.toggleWeek = function(week) {
		week.isExpanded = !week.isExpanded;
	};

	$scope.instructorSelection = 'General';

	$scope.selectInstructor = function(inst) {
		$scope.instructorSelection = inst;
	};
}