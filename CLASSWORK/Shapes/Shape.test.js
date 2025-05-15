
const Rectangle = require('./Rectangle');

test('Rectangle', () => {
    let rectangle = new Rectangle("Rectangle",10,20);
    expect(rectangle.getName()).toBe("Rectangle");
    expect(rectangle.getArea()).toBe(200);
    expect(rectangle.isSquare()).toBe(false)

})