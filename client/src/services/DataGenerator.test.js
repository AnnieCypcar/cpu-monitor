import { createDummyData, createDummyNow }  from './DataGenerator';

test('createDummyData: generates a set of cpu data', () => {
    const data = createDummyData(50);
    for (const item of data) {
        expect(item.value).toBeGreaterThan(0);
        expect(item.value).toBeLessThan(3);
        expect(item.time).toBeDefined();
    }
});

test('createDummyNow: generates a single cpu data point', () => {
    const data = createDummyNow();
    expect(data.value).toBeGreaterThan(0);
    expect(data.value).toBeLessThan(3);
    expect(data.time).toBeDefined();
});