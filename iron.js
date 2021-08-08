class iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 13,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
}