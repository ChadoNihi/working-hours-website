//TODOs: add confirmation to approve btns

const hoursPerCredit = 27,
      student = {
        firstName: 'Roby',
        lastName: 'Pulthon',

      },
      projects = [
        {name: 'VR demos website',
         hours: 80},
        {name: 'Report visualizer',
         hours: 30},
        {name: 'Vegfest website',
         hours: 66}
      ],
      pendingApprovals = [
        {month: 'September',
         projectName: projects[0].name,
         workDone: 'Some text, short one.',
         hours: 80},
        {month: 'October',
         projectName: projects[0].name,
         workDone: 'Some text, short one.',
         hours: 20},
        {month: 'October',
         projectName: projects[1].name,
         workDone: 'Some text, short one.',
         hours: 79},
        {month: 'November',
         projectName: projects[0].name,
         workDone: 'Some text, looonger one. Some text, looonger one. Some text, looonger one. Some text, looonger one.',
         hours: 100}
      ];

/*
  function declarations
*/
function getTbodyStringForProjectTable(projects) {
  var tbodyInners = '';
  projects.forEach(function(project) {
    tbodyInners += '<tr><td>'+
                    project.name+
                    '</td><td><input type="text" class="form-control" value='+
                    project.hours+
                    ' disabled /></td><td><input type="text" class="form-control" value='+
                    Math.floor(project.hours/hoursPerCredit)+
                    ' disabled /></td></tr>';
  });

  return tbodyInners;
}
function getTbodyStringForApprovalsTable(pendingApprovals) {
  var inners = '';
  pendingApprovals.forEach(function(approval) {
    inners += '<tr><td>'+
              approval.month+
              '</td><td>'+
              approval.projectName+
              '</td><td>'+
              approval.workDone+
              '</td><td>'+
              approval.hours+
              '</td><td>'+
              Math.floor(approval.hours/hoursPerCredit)+
              '</td><td>'+
              '<button type="button" class="btn btn-success">Approve</button>'+
              '<button type="button" class="btn btn-danger">Reject</button>'+
              '</td></tr>';
  });

  return inners;
}

/*
  on ready, main function
*/
document.addEventListener('DOMContentLoaded', function() {
  var projectsTbody = document.getElementById('ceo-student-projects-tbody'),
      approvalsTbody = document.getElementById('pending-approvals-tbody');

  projectsTbody.innerHTML = getTbodyStringForProjectTable(projects);

  approvalsTbody.innerHTML = getTbodyStringForApprovalsTable(pendingApprovals);
}, false);
