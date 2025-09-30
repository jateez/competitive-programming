type MinStack struct {
	st  []int
	min []int
}

func Constructor() MinStack {
	return MinStack{
		st:  []int{},
		min: []int{math.MaxInt},
	}
}

func (this *MinStack) Push(val int) {
	this.st = append(this.st, val)
	if val < this.min[0] {
		this.min[0] = val
	}
}

func (this *MinStack) Pop() {
	if len(this.st) == 0 {
		fmt.Errorf("stack is empty")
	}
	if this.min[0] == this.st[len(this.st)-1] {
		this.st = this.st[:len(this.st)-1]
		this.min[0] = math.MaxInt
		for _, num := range this.st {
			if num < this.min[0] {
				this.min[0] = num
			}
		}
	} else {
		this.st = this.st[:len(this.st)-1]
	}
}

func (this *MinStack) Top() int {
	val := this.st[len(this.st)-1]
	return val
}

func (this *MinStack) GetMin() int {
	if len(this.min) == 0 {
		fmt.Errorf("stack is empty")
	}
	return this.min[0]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */