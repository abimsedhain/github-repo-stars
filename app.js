  new roughViz.Bar({
    element: '#viz0',
    data: 'git.csv',
    labels: 'Framework',
    values: 'Star',
    title:'Github Repo Stars',
    stroke: 'black',
    strokeWidth: 2,
    roughness: 1, //Default is 0.5
    axisFontSize: '0.9rem',
    font:1,
    height: 670,
    width:1180,
    margin: {top: 50, bottom: 100, left: 160, right: 0},
    yLabel:'Number of Stars'

  })