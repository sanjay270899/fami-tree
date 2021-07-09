function App() {
  return (
    <>
      <div className="tree">
        <ul>
          <li>
            <span>
              <img src="https://picsum.photos/200/300" alt="" />
              <span>Parent</span>
            </span>
            <ul>
              <li>
                <span>
                  <img src="https://picsum.photos/200/300" alt="" />
                  <span>Child 1</span>
                </span>
                <ul>
                  <li>
                    <span>
                      <img src="https://picsum.photos/200/300" alt="" />
                      <span>Child 1 1</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src="https://picsum.photos/200/300" alt="" />
                      <span>Child 1 2</span>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <img src="https://picsum.photos/200/300" alt="" />
                  <span>Child 2</span>
                </span>
                <ul>
                  <li>
                    <span>
                      <img src="https://picsum.photos/200/300" alt="" />
                      <span>child</span>
                    </span>
                    <ul>
                      <li>
                        <span>
                          <img src="https://picsum.photos/200/300" alt="" />
                          <span>child</span>
                        </span>
                        <ul>
                          <li>
                            <span>
                              <img src="https://picsum.photos/200/300" alt="" />
                              <span>child</span>
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <img src="https://picsum.photos/200/300" alt="" />
                  <span>Child 3</span>
                </span>
              </li>
              <li>
                <span>
                  <img src="https://picsum.photos/200/300" alt="" />
                  <span>Child 3</span>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
