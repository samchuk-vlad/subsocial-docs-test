initSidebarItems({"enum":[["EitherUpgrade","A type to represent two possible upgrade types (inbound or outbound)."],["NegotiationError","Error that can happen when negotiating a protocol with the remote."],["ProtocolError","A protocol error."],["ReadOneError","Error while reading one message."],["UpgradeError","Error that can happen when upgrading a connection or substream to use a protocol."],["Version","Supported multistream-select protocol versions."]],"fn":[["apply","Applies an upgrade to the inbound and outbound direction of a connection or substream."],["apply_inbound","Tries to perform an upgrade on an inbound connection or substream."],["apply_outbound","Tries to perform an upgrade on an outbound connection or substream."],["from_fn","Initializes a new [`FromFnUpgrade`]."],["read_one","Reads a length-prefixed message from the given socket."],["read_varint","Reads a variable-length integer from the `socket`."],["write_one","Send a message to the given socket, then shuts down the writing side."],["write_varint","Writes a variable-length integer to the `socket`."],["write_with_len_prefix","Send a message to the given socket with a length prefix appended to it. Also flushes the socket."]],"struct":[["DeniedUpgrade","Dummy implementation of `UpgradeInfo`/`InboundUpgrade`/`OutboundUpgrade` that doesn’t support any protocol."],["FromFnUpgrade","Implements the `UpgradeInfo`, `InboundUpgrade` and `OutboundUpgrade` traits."],["InboundUpgradeApply","Future returned by `apply_inbound`. Drives the upgrade process."],["MapInboundUpgrade","Wraps around an upgrade and applies a closure to the output."],["MapInboundUpgradeErr","Wraps around an upgrade and applies a closure to the error."],["MapOutboundUpgrade","Wraps around an upgrade and applies a closure to the output."],["MapOutboundUpgradeErr","Wraps around an upgrade and applies a closure to the error."],["NegotiatedComplete","A `Future` that waits on the completion of protocol negotiation."],["OptionalUpgrade","Upgrade that can be disabled at runtime."],["OutboundUpgradeApply","Future returned by `apply_outbound`. Drives the upgrade process."],["SelectUpgrade","Upgrade that combines two upgrades into one. Supports all the protocols supported by either sub-upgrade."]],"trait":[["InboundUpgrade","Possible upgrade on an inbound connection or substream."],["InboundUpgradeExt","Extension trait for `InboundUpgrade`. Automatically implemented on all types that implement `InboundUpgrade`."],["OutboundUpgrade","Possible upgrade on an outbound connection or substream."],["OutboundUpgradeExt","Extention trait for `OutboundUpgrade`. Automatically implemented on all types that implement `OutboundUpgrade`."],["ProtocolName","Types serving as protocol names."],["UpgradeInfo","Common trait for upgrades that can be applied on inbound substreams, outbound substreams, or both."]]});